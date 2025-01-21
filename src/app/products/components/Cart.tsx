import React, { useMemo } from "react";
import Image from "next/image";
// UI Components
import {
  Drawer,
  Text,
  Dialog,
  Stack,
  Box,
  Button,
  Grid,
  Carousel,
  AspectRatio,
  Icon
} from "@stewed/react";
// Data
import { PRODUCTS } from "../data";

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
      <Drawer.Body></Drawer.Body>
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
