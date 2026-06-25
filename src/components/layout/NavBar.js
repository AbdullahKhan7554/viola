"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/TrackedCTA";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Sticky responsive header (PRD F17). Transparent over the hero, becomes
 * solid on scroll. Mobile: accessible slide-in menu with focus management,
 * body-scroll lock, and Escape-to-close.
 */
export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + Escape handling while menu open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
          ? "bg-bg/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] w-full max-w-[80rem] items-center justify-between px-5 sm:px-6 lg:px-10"
      >
        <Logo tone={solid ? "dark" : "light"} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors",
                    solid ? "text-text" : "text-white",
                    "hover:text-accent",
                    active && "text-accent"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton size="sm" location="navbar">
            Book Now
          </WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
            solid ? "text-primary hover:bg-soft" : "text-white hover:bg-white/10"
          )}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 top-[68px] bg-text/30 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            "fixed inset-x-0 top-[68px] origin-top border-t border-line bg-bg px-5 pb-8 pt-4 shadow-elevated transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          )}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href} className="border-b border-line/70">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 text-lg font-medium",
                      active ? "text-accent" : "text-text"
                    )}
                  >
                    {link.label}
                    <Icon name="chevronRight" size={20} className="text-muted" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <WhatsAppButton size="lg" location="mobile_menu" className="w-full">
              Book on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </header>
  );
}
