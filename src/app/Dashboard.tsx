import React from "react";
// UI Components
import { Box, Separator, Container } from "@stewed/react";
import { SidePanel } from "./SidePanel";
import { Board } from "./Board";

export function Dashboard(): React.ReactElement {
    return (
        <Box padding={{ block: "2xl", inline: "2xl" }}>
            <SidePanel />
            <Separator
                orientation="vertical"
                skin="neutral-border"
                space={{ inline: "2xl" }}
            />
            <Container screen="2xl">
                <Board />
            </Container>
        </Box>
    );
}
