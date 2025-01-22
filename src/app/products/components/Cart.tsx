import React from "react";
import Image from "next/image";
// UI Components
import { Drawer, Text, Stack, Box, Button, AspectRatio, ScrollArea } from "@stewed/react";
import { Quantity } from "./Quantity";
// Data
import { PRODUCTS } from "../data";
// Icons
import { LuTrash } from "react-icons/lu";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export function Cart({ open, onClose }: CartProps): React.ReactElement {
  return (
    <Drawer
      open={open}
      safeMargin="sm"
      onClickOutside={onClose}
      onClose={onClose}
      onEscape={onClose}
      size="sm"
      placement="right"
    >
      <Drawer.Header>
        <Text as="h3" size="lg" weight="medium">
          Shopping cart
        </Text>
        <Text size="xs" skin="neutral">
          This is your shopping cart. You can add, remove, and checkout your items here.
        </Text>
      </Drawer.Header>
      <Drawer.Separator />
      <ScrollArea style={{ height: "100%" }}>
        <Drawer.Body>
          <Stack direction="column" gap="xl">
            {PRODUCTS.slice(0, 6).map(({ thumb, name }) => (
              <Stack gap="md">
                <AspectRatio radius="md" ratio="1:1" style={{ width: 100, height: 100 }}>
                  <Image src={thumb as string} alt={name} width={100} height={100} />
                </AspectRatio>
                <Stack direction="column">
                  <Box space={{ y: "sm" }}>
                    <Stack gap="md" justify="between">
                      <Text size="sm">{name}</Text>
                      <Text size="sm" weight="medium">
                        60€
                      </Text>
                    </Stack>
                  </Box>
                  <Stack gap="sm" direction="column">
                    <Text size="xs" skin="neutral">
                      Yellow | XS
                    </Text>
                    <Stack justify="between" items="center">
                      <Quantity size="xs" max={10} />
                      <Button
                        size="xs"
                        skin="critical"
                        appearance="ghost"
                        leftSlot={<LuTrash size={12} />}
                        iconOnly
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Drawer.Body>
      </ScrollArea>
      <Drawer.Separator />
      <Drawer.Footer>
        <Box space={{ y: "5xl" }}>
          <Stack direction="column" gap="md">
            <Stack justify="between">
              <Text>Subtotal</Text>
              <Text>€250.00</Text>
            </Stack>
            <Text size="xs" skin="neutral">
              Shipping and taxes calculated at checkout.
            </Text>
          </Stack>
        </Box>
        <Stack direction="column" gap="sm">
          <Button fullWidth>Proceed to checkout</Button>
          <Button fullWidth appearance="ghost">
            Or Continue Shopping
          </Button>
        </Stack>
      </Drawer.Footer>
    </Drawer>
  );
}
