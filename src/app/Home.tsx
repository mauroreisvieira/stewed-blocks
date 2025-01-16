"use client";

import React from "react";
import Link from "next/link";
import { Theme, Container, Stack, Hoverable, Box, Text } from "@stewed/react";

export function Home(): React.ReactElement {
  return (
    <Theme>
      <Container screen="md" alignment="center" padding={{ block: "2xl", inline: "2xl" }}>
        <Stack direction="column" gap="md">
          {[
            { href: "/products", title: "E-Commerce" },
            { href: "/mail", title: "E-mail" },
            { href: "/music", title: "Music" },
            { href: "/chat", title: "Chat AI" },
          ].map(({ href, title }) => (
            <Link key={href} href={href}>
              <Hoverable>
                {({ isHovering }) => (
                  <Box
                    padding={{ inline: "lg", block: "lg" }}
                    borderStyle="solid"
                    borderWidth={1}
                    borderColor="neutral-faded"
                    skin={isHovering ? "neutral-faded" : undefined}
                    radius="sm"
                    fullWidth
                  >
                    <Text weight="medium">{title}</Text>
                  </Box>
                )}
              </Hoverable>
            </Link>
          ))}
        </Stack>
      </Container>
    </Theme>
  );
}
