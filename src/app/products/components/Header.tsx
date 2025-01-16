import React from "react";
import Link from "next/link";

import { Theme, Box, Container, Stack, Text, Badge, Button, useTheme } from "@stewed/react";

import { AiOutlineShopping } from "react-icons/ai";

export function Header(): React.ReactElement {
  const { tokens } = useTheme();

  return (
    <Theme
      style={{ position: "sticky", top: 0, zIndex: 10 }}
      cssScope="header"
      tokens={{
        default: {
          ...tokens?.default,
          components: {
            button: {
              radius: "full"
            }
          }
        }
      }}
    >
      <Box borderWidth={1} borderColor="neutral-faded" borderStyle="solid" skin="white">
        <Container screen="xl" alignment="center" padding={{ block: "lg", inline: "lg" }}>
          <Stack justify="between" items="center">
            <Stack gap="2xl">
              <Text size="xs" skin="neutral">
                Home
              </Text>
              <Link href="/products">
                <Text size="xs" skin="neutral">
                  Products
                </Text>
              </Link>
            </Stack>
            <Stack>
              <Badge value={4} skin="info" overlap="circular">
                <Button
                  size="sm"
                  appearance="ghost"
                  leftSlot={<AiOutlineShopping size={18} />}
                  iconOnly
                >
                  Cart
                </Button>
              </Badge>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Theme>
  );
}
