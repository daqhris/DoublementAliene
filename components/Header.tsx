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
      theater-link text-sm font-medium transition-all duration-200
      ${isActive ? 'theater-link-active' : ''}
    `}
  >
    {children}
  </Link>
);

export const menuLinks = [
  { label: "Accueil", href: "/" },
  { label: "Performance", href: "/performance" },
  { label: "Recherche", href: "/research" },
  { label: "Chronologie", href: "/timeline" },
  { label: "À Propos", href: "/about" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="bg-theater-background border-b-2 border-theater-muted/20 py-6">
      <div className="theater-container">
        <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
    </header>
  );
};
