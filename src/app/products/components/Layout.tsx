"use client";

import React, { useState } from "react";
// UI Components
import { Theme } from "@stewed/react";
import { Header } from "./Header";
import { Cart } from "./Cart";

export function Layout({ children }: { children: React.ReactNode }): React.ReactElement {
  const [open, setOpen] = useState(false);
  return (
    <Theme
      tokens={{
        default: {
          color: {
            "primary-foreground": "slate-900",
            "primary-border": "slate-900",
            "primary-border-hovered": "slate-800",
            "primary-background": "slate-900",
            "primary-background-hovered": "slate-800",
            "primary-background-pressed": "slate-800",
            "primary-foreground-on-background": "#fff",
            "secondary-background": "slate-100",
            "secondary-background-hovered": "slate-200",
            "secondary-background-pressed": "slate-200",
            "secondary-foreground-on-background": "slate-800"
          },
          components: {
            button: {
              radius: "md"
            }
          }
        }
      }}
    >
      <Header onCartClick={() => setOpen(true)} />
      {children}
      <Cart open={open} onClose={() => setOpen(false)} />
    </Theme>
  );
}
