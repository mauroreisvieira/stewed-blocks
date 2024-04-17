"use client";

import { Theme, Container, Box, Separator } from "@stewed/react";
import { SidePanel } from "./SidePanel";

type ThemeOptions = "default" | "metro" | "elegant";

interface LayoutProps {
    children: React.ReactNode;
}

export function LayoutWithNav({ children }: LayoutProps): React.ReactElement {
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
            }}
        >
            <Box padding={{ block: "2xl", inline: "2xl" }}>
                <SidePanel />
                <Separator
                    orientation="vertical"
                    skin="primary-border"
                    space={{ inline: "2xl" }}
                />
                <Container screen="2xl">
                    <Box direction="column" gap="2xl" grow>
                        {children}
                    </Box>
                </Container>
            </Box>
        </Theme>
    );
}
