"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Cerimônia", href: "#ceremony" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Presentes", href: "#gifts" },
  { label: "Fotos", href: "#photos" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener — glassmorphic bg after 100px
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver — track active section
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id], header[id], main[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMenu();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [closeMenu]
  );

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__container">
        {/* Monogram */}
        <a
          href="#hero"
          className="nav__logo"
          onClick={(e) => handleLinkClick(e, "#hero")}
        >
          M &amp; J
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__link${
                  activeSection === link.href.slice(1) ? " nav__link--active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Fullscreen mobile overlay */}
      <div className={`nav__overlay${menuOpen ? " nav__overlay--open" : ""}`}>
        <ul className="nav__overlay-links">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={menuOpen ? { animationDelay: `${0.1 + i * 0.08}s` } : undefined}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
