"use client";

import { Theme } from "@stewed/react";
import { Dashboard } from "./Dashboard";

type ThemeOptions = "default" | "metro" | "elegant";

export default function Home() {
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
            <Dashboard />
        </Theme>
    );
}
