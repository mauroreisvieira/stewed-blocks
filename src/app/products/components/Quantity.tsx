import React, { useState } from "react";
// UI Components
import { Box, Text, Group, Button } from "@stewed/react";
// Icons
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";

interface QuantityProps {
  size?: "xs" | "sm";
  max: number;
}

export function Quantity({ max, size = "sm" }: QuantityProps): React.ReactElement {
  // Using a custom hook `useInput` to manage the input value for the quantity.
  const [value, setValue] = useState(1);

  return (
    <Box
      radius="md"
      borderColor="neutral-faded"
      borderStyle="solid"
      borderWidth={1}
      padding={{ block: "xxs", inline: "xxs" }}
    >
      <Group gap="xxs" style={{ height: "100%", alignItems: "center" }} loop>
        <Button
          size={size}
          skin="neutral"
          appearance="soft"
          leftSlot={<HiMinusSm size={12} />}
          onClick={() => setValue(Number(value) - 1)}
          disabled={value <= 1}
          iconOnly
        >
          Decrease
        </Button>

        <Box padding={{ inline: "sm" }}>
          <Text
            as="span"
            size={size}
            skin={value > max ? "critical" : "default"}
            alignment="center"
          >
            {value}
          </Text>
        </Box>

        <Button
          size={size}
          skin="neutral"
          appearance="soft"
          leftSlot={<HiOutlinePlusSm size={12} />}
          onClick={() => setValue(Number(value) + 1)}
          disabled={value === max}
          iconOnly
        >
          Increase
        </Button>
      </Group>
    </Box>
  );
}
