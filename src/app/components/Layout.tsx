"use client";

import { Theme, Container, Box, Separator } from "@stewed/react";
import { SidePanel } from "./SidePanel";

type ThemeOptions = "default" | "metro" | "elegant";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <Theme<ThemeOptions>
      tokens={{
        default: {
          color: {
            backdrop: "rgb(200 200 200 / 70%)",
          },
          components: {
            button: {
              radius: "full",
            },
          },
        },
      }}>
      <Container screen="sm" alignment="center" padding={{ block: "6xl" }}>
        <Box direction="column" gap="2xl" grow>
          {children}
        </Box>
      </Container>
    </Theme>
  );
}
