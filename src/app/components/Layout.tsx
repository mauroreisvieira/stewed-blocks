"use client";

import { Theme, Container, Box, Separator, Grid } from "@stewed/react";
import { SidePanel } from "./SidePanel";

type ThemeOptions = "default" | "epic";

interface LayoutProps {
  displayNav?: boolean;
  children: React.ReactNode;
}

export function Layout({ displayNav, children }: LayoutProps): React.ReactElement {
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
      <Grid gap="2xl" cols={12} padding={{ inline: "xl", block: "xl" }}>
        {displayNav && (
          <Grid.Item colSpan={12} responsive={{ sm: { colSpan: 2 } }}>
            <SidePanel />
            <Separator orientation="vertical" space={{ inline: "2xl" }} />
          </Grid.Item>
        )}
        <Grid.Item colSpan={12} responsive={{ sm: { colSpan: 10 } }}>
          <Container screen="2xl">
            <Box direction="column" gap="2xl" grow>
              {children}
            </Box>
          </Container>
        </Grid.Item>
      </Grid>
    </Theme>
  );
}
