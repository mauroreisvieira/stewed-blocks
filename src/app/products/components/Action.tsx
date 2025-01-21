import React, { useState } from "react";
// UI Components
import { Box, FormField, Text, Stack, Group, Button } from "@stewed/react";
// Icons
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
// Data
import { SIZES } from "../data";

interface ActionProps {
  sizes?: string[];
  colors?: string[];
  stock?: number;
}

export function Action({ sizes, colors, stock = 0 }: ActionProps): React.ReactElement {
  // State to manage the selected size of the product
  const [selectedSize, setSelectedSize] = useState("");

  // State to manage the selected color of the product
  const [selectedColor, setSelectedColor] = useState("");

  // Using a custom hook `useInput` to manage the input value for the quantity.
  const [value, setValue] = useState(1);

  return (
    <Stack direction="column" gap="4xl" grow>
      <Stack direction="column" gap="2xl" grow>
        <FormField>
          <FormField.Label htmlFor="group">Size</FormField.Label>
          <FormField.Control>
            <Group gap="sm">
              {SIZES.map((value) => (
                <Button
                  key={value}
                  size="sm"
                  disabled={!sizes?.includes(value)}
                  tabIndex={value === selectedSize ? 0 : -1}
                  pressed={value === selectedSize}
                  skin={value === selectedSize ? "primary" : "neutral"}
                  appearance={value === selectedSize ? "filled" : "outline"}
                  onClick={() => setSelectedSize(value)}
                >
                  {value}
                </Button>
              ))}
            </Group>
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label htmlFor="group">Pick Color</FormField.Label>
          <FormField.Control>
            <Group gap="sm">
              {colors?.map((value) => (
                <Button
                  key={value}
                  size="sm"
                  tabIndex={value === selectedColor ? 0 : -1}
                  pressed={value === selectedColor}
                  skin={value === selectedColor ? "primary" : "neutral"}
                  appearance={value === selectedColor ? "filled" : "outline"}
                  onClick={() => setSelectedColor(value)}
                >
                  {value}
                </Button>
              ))}
            </Group>
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label htmlFor="quantity">Quantity</FormField.Label>
          <FormField.Control>
            <Box
              radius="md"
              borderColor="neutral-faded"
              borderStyle="solid"
              borderWidth={1}
              padding={{ block: "xxs", inline: "xxs" }}
            >
              <Group gap="xxs" loop>
                <Button
                  size="sm"
                  skin="neutral"
                  appearance="soft"
                  leftSlot={<HiMinusSm size={16} />}
                  onClick={() => setValue(Number(value) - 1)}
                  disabled={value <= 1}
                  iconOnly
                >
                  Decrease
                </Button>

                <Box as="span" padding={{ inline: "lg", block: "xs" }}>
                <Text as="span" size="sm" skin={value > stock ? "critical" : "default"} alignment="center">
                  {value}
                </Text>
                </Box>

                <Button
                  size="sm"
                  skin="neutral"
                  appearance="soft"
                  leftSlot={<HiOutlinePlusSm size={16} />}
                  onClick={() => setValue(Number(value) + 1)}
                  disabled={value === stock}
                  iconOnly
                >
                  Increase
                </Button>
              </Group>
            </Box>
          </FormField.Control>
        </FormField>
      </Stack>

      <Stack gap="md">
        <Button skin="primary" fullWidth>
          Checkout now
        </Button>
        <Button appearance="outline" fullWidth>
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
}
