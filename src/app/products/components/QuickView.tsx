import React, { useMemo, useState } from "react";
import Image from "next/image";
// UI Components
import {
  Text,
  Dialog,
  Stack,
  FormField,
  Box,
  Group,
  Button,
  TextField,
  Tag,
  Grid,
  Carousel,
  AspectRatio,
  Icon,
  Hoverable
} from "@stewed/react";
// Hooks
import { useInput } from "@stewed/hooks";
// Icons
import { HiMinusSm, HiOutlinePlusSm, HiChevronLeft, HiChevronRight } from "react-icons/hi";
// Data
import { PRODUCTS, SIZES } from "../data";

interface QuickViewProps {
  id: number | undefined;
  onClose: () => void;
}

export function QuickView({ id, onClose }: QuickViewProps): React.ReactElement {
  // State to manage the selected size of the product
  const [selectedSize, setSelectedSize] = useState("");

  // State to manage the selected color of the product
  const [selectedColor, setSelectedColor] = useState("");

  // This prevents unnecessary recalculations when the component re-renders.
  const product = useMemo(() => PRODUCTS.find((product) => product.id === id), [id]);

  // Using a custom hook `useInput` to manage the input value for the quantity.
  const { value, setValue, onChange } = useInput<number>(1);

  return (
    <Dialog
      open={!!id}
      onClickOutside={onClose}
      onEscape={onClose}
      onClose={onClose}
      size="lg"
      padding={{ block: "none", inline: "none" }}
    >
      <Dialog.Body>
        <Grid cols={2}>
          <Hoverable>
            {({ isHovering }) => (
              <Carousel
                showNavigation={isHovering}
                navigation={{
                  renderPrev: (props) => (
                    <Button
                      skin="secondary"
                      leftSlot={<Icon.ChevronLeft size={18} />}
                      iconOnly
                      {...props}
                    />
                  ),
                  renderNext: (props) => (
                    <Button
                      skin="secondary"
                      leftSlot={<HiChevronRight size={18} />}
                      iconOnly
                      {...props}
                    />
                  )
                }}
              >
                {product?.images?.map((image) => (
                  <AspectRatio ratio="2:3" key={image}>
                    <Image src={image} alt={product.name} width={600} height={600} />
                  </AspectRatio>
                ))}
              </Carousel>
            )}
          </Hoverable>

          <Box padding={{ block: "2xl", inline: "2xl" }}>
            <Stack direction="column" style={{ height: "100%" }}>
              <Text as="h4" space={{ y: "md" }}>
                {product?.name}
              </Text>

              <Text size="sm" skin="neutral" space={{ y: "lg" }}>
                {product?.brand} / {product?.tag}
              </Text>

              <Stack direction="column" gap="2xl" grow>
                <Stack gap="sm">
                  {product?.price.discount ? (
                    <>
                      <Stack gap="sm">
                        <Text
                          size="3xl"
                          weight="light"
                          variation="line-through"
                          skin="neutral-faded"
                        >
                          {product?.price.value}
                          {product?.price.currency}
                        </Text>

                        <Text size="3xl" weight="semi-bold">
                          {product?.price.value -
                            (product?.price.value * product?.price.discount) / 100}
                          {product?.price.currency}
                        </Text>
                      </Stack>
                    </>
                  ) : (
                    <Text size="3xl" weight="semi-bold">
                      {product?.price.value}
                      {product?.price.currency}
                    </Text>
                  )}
                </Stack>

                <Text as="div" size="xs" whiteSpace="pre-wrap">
                  {product?.description}
                </Text>

                <FormField>
                  <FormField.Label htmlFor="group">Size</FormField.Label>
                  <FormField.Control>
                    <Group gap="sm">
                      {SIZES.map((value) => (
                        <Button
                          key={value}
                          size="sm"
                          disabled={!product?.sizes.includes(value)}
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
                      {product?.color.map((value) => (
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
                      <Group gap="xxs">
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

                        <TextField
                          id="quantity"
                          skin={value > (product?.stock || 0) ? "critical" : "neutral"}
                          size="sm"
                          appearance="ghost"
                          name="quantity"
                          value={value}
                          onChange={onChange}
                          maxChars={Number(product?.stock).toString().length}
                          alignment="center"
                          pattern="\d*"
                          autoComplete="off"
                        />

                        <Button
                          size="sm"
                          skin="neutral"
                          appearance="soft"
                          leftSlot={<HiOutlinePlusSm size={16} />}
                          onClick={() => setValue(Number(value) + 1)}
                          disabled={value === product?.stock}
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
                <Button skin="primary" size="lg" fullWidth>
                  Checkout now
                </Button>
                <Button appearance="outline" size="lg" fullWidth>
                  Add to cart
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Dialog.Body>
    </Dialog>
  );
}
