"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark, HiOutlineArrowDownTray } from "react-icons/hi2";

import { navigation } from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <button
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow">
            AK
          </div>

          <div className="text-left">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Anil Kumar
            </h2>

            <p className="text-xs text-slate-500">Senior Backend Engineer</p>
          </div>
        </button>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = activeSection === item.href.replace("#", "");

            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-[15px] font-medium transition-colors ${
                  active
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-[26px] left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/resume/Anil_Kumar_Senior_Backend_Engineer_Resume.pdf"
            target="_blank"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
          >
            <HiOutlineArrowDownTray size={18} />
            Resume
          </Link>

          <button
            onClick={() => scrollToSection("#contact")}
            className="inline-flex h-11 items-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 p-5">
          {navigation.map((item) => {
            const active = activeSection === item.href.replace("#", "");

            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-4">
            <Link
              href="/resume/Anil_Kumar_Senior_Backend_Engineer_Resume.pdf"
              target="_blank"
              className="mb-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 text-sm font-semibold text-slate-700"
            >
              <HiOutlineArrowDownTray size={18} />
              Resume
            </Link>

            <button
              onClick={() => scrollToSection("#contact")}
              className="flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
