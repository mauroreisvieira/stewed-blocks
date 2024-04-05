import React from "react";
// UI Components
import { Theme, Box, Separator, Container } from "@stewed/react";
import { SidePanel } from "./SidePanel";
import { Board } from "./Board";

export function Dashboard(): React.ReactElement {
  return (
    <Theme>
      <Box padding={{ block: "2xl", inline: "2xl" }}>
        <SidePanel />
        <Separator orientation="vertical" skin="neutral-border" space={{ inline: "2xl" }} />
        <Container screen="2xl" alignment="center">
        <Board />
        </Container>
      </Box>
    </Theme>
  );
}
