"use client";

import React from "react";
import Link from "next/link";
import { Theme, Container, Box } from "@stewed/react";

export function Home(): React.ReactElement {
  return (
    <Theme>
      <Container screen="md" alignment="center" padding={{ block: "2xl", inline: "2xl" }}>
        <Link href={"/products"}>
          <Box>E-Commerce</Box>
        </Link>
      </Container>
    </Theme>
  );
}
