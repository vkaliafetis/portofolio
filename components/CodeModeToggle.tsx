"use client";

import React, { useEffect } from "react";
import { useTheme } from "@/lib/ThemeContext";

/**
 * A button that toggles the Code‑Reveal mode, which switches the theme
 * to the industrial/blueprint look and activates code tooltips on
 * hover. It also listens to the Ctrl/Cmd + \ keyboard shortcut.
 */
export default function CodeModeToggle() {
  const { codeMode, toggleCodeMode } = useTheme();
  const label = codeMode ? "Disable code reveal" : "Enable code reveal";
  const symbol = codeMode ? "</>" : "< >";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Use Ctrl or Cmd + backslash to toggle code mode
      if ((event.metaKey || event.ctrlKey) && event.key === "\\") {
        event.preventDefault();
        toggleCodeMode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleCodeMode]);

  return (
    <button onClick={toggleCodeMode} aria-label={label} title={label}
      style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", background: "none", border: "none", padding: 0, color: "inherit" }}>
      {symbol}
    </button>
  );
}