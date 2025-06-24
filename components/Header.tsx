"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeProvider";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive, onClick }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className={`
      block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
      ${isActive 
        ? 'bg-theater-accent text-white shadow-md' 
        : 'text-theater-primary dark:text-theater-secondary hover:bg-theater-accent/10 hover:text-theater-accent'
      }
      focus:outline-none focus:ring-2 focus:ring-theater-accent focus:ring-offset-2
      touch-manipulation min-h-[44px] flex items-center
    `}
  >
    {children}
  </Link>
);

type HeaderMenuLink = {
  label: string;
  href: string;
  icon: string;
};

export const menuLinks: HeaderMenuLink[] = [
  { label: "Accueil", href: "/", icon: "🏠" },
  { label: "Performance", href: "/performance", icon: "🎭" },
  { label: "Galerie", href: "/gallery", icon: "📸" },
  { label: "Recherche", href: "/research", icon: "🔬" },
  { label: "Chronologie", href: "/timeline", icon: "📅" },
  { label: "À Propos", href: "/about", icon: "ℹ️" },
];

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-theater-accent/10 transition-colors"
      aria-label="Basculer le thème"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-theater-secondary" />
      ) : (
        <MoonIcon className="h-5 w-5 text-theater-primary" />
      )}
    </button>
  );
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-theater-secondary dark:bg-theater-primary border-b border-theater-muted/20 sticky top-0 z-50">
      <div className="theater-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-theater-primary dark:text-theater-secondary">
              🎭 Doublement Aliéné
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {menuLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-theater-accent/10 transition-colors"
              aria-label="Menu de navigation"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-theater-primary dark:text-theater-secondary" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-theater-primary dark:text-theater-secondary" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden absolute top-16 left-0 right-0 bg-theater-secondary dark:bg-theater-primary border-b border-theater-muted/20 shadow-lg"
          >
            <nav className="px-4 py-4 space-y-2">
              {menuLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={pathname === link.href}
                  onClick={closeMenu}
                >
                  <span className="mr-3 text-lg">{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
