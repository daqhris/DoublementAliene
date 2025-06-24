"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => (
  <Link 
    href={href}
    className={`
      text-theater-text hover:underline transition-all duration-200
      ${isActive ? 'underline font-medium' : 'font-normal'}
    `}
  >
    {children}
  </Link>
);

export const menuLinks = [
  { label: "Accueil", href: "/" },
  { label: "Performance", href: "/performance" },
  { label: "Galerie", href: "/gallery" },
  { label: "Recherche", href: "/research" },
  { label: "Chronologie", href: "/timeline" },
  { label: "À Propos", href: "/about" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="bg-theater-background border-b border-theater-muted/20 py-4">
      <div className="theater-container">
        <div className="flex flex-col space-y-4">
          <div>
            <Link href="/" className="text-xl font-semibold text-theater-text hover:underline">
              Doublement Aliéné
            </Link>
          </div>
          
          <nav className="flex flex-wrap gap-20">
            {menuLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
