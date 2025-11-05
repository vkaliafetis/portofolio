"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import CodeModeToggle from "@/components/CodeModeToggle";

/**
 * The global site header containing navigation links and controls. It
 * remains at the top of the page and collapses on smaller screens into
 * a minimal bar. All anchor links correspond to sections on the page.
 */
export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255,255,255,0.6)",
        borderBottom: "1px solid var(--color-border)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--space-sm) var(--space-md)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <nav aria-label="Primary">
          <ul>
            <li>
              <Link href="#hero">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#interests">Interests</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
          {/* Only the code mode toggle lives in the header. Theme toggle is in the footer. */}
          <CodeModeToggle />
        </div>
      </div>
    </header>
  );
}