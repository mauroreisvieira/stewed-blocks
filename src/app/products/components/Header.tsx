import React from "react";
import Link from "next/link";
// Components
import { Box, Container, Stack, Text, Badge, Button } from "@stewed/react";
// Icons
import { AiOutlineShopping } from "react-icons/ai";

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps): React.ReactElement {
  return (
    <Box
      style={{ position: "sticky", top: 0, zIndex: 10 }}
      borderWidth={1}
      borderColor="neutral-faded"
      borderStyle="solid"
      skin="white"
    >
      <Container screen="xl" alignment="center" padding={{ block: "lg", inline: "lg" }}>
        <Stack justify="between" items="center">
          <Stack gap="2xl">
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
                onClick={onCartClick}
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
  );
}
