"use client";

import { Theme, Container, Box, type ContainerProps } from "@stewed/react";
import { SidePanel } from "./SidePanel";

type ThemeOptions = "default" | "epic";

interface LayoutProps {
  screen?: ContainerProps<"div">["screen"];
  children: React.ReactNode;
}

export function Layout({ screen = "2xl", children }: LayoutProps): React.ReactElement {
  return (
    <Theme<ThemeOptions>
      tokens={{
        default: {
          color: {
            primary: "#3f51b5",
          },
          fontFamily: {
            base: "'Roboto Serif', serif",
          },
          components: {
            "text-field": {
              radius: "none",
            },
            "select": {
              radius: "none",
            },
            "card": {
              radius: "none",
            },
            "switch": {
              radius: "none",
            },
            "dialog": {
              radius: "none",
              shadow: "xl",
            },
            "tabs": {
              radius: "none",
            },
            "button": {
              radius: "none",
            },
          },
        },
        epic: {
          fontFamily: {
            base: "'DM Sans', sans-serif",
          },
          color: {
            "background-backdrop": "rgb(200 200 200 / 70%)",
            "primary": "#9c27b0",
            "secondary": "#000",
            "critical": "#e91111",
            "success": "#14784a",
          },
        },
      }}
      defaultTheme="epic">
      <SidePanel open={false} />

      <Container screen={screen} padding={{ block: "2xl", inline: "2xl" }} alignment="center">
        <Box direction="column" gap="2xl" grow>
          {children}
        </Box>
      </Container>
    </Theme>
  );
}
