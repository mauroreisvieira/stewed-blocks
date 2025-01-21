import React, { useMemo } from "react";
import Image from "next/image";
// UI Components
import { Text, Dialog, Stack, Box, Button, Grid, Carousel, AspectRatio, Icon } from "@stewed/react";
import { Action } from "./Action";
// Data
import { PRODUCTS } from "../data";

interface QuickViewProps {
  id: number | undefined;
  onClose: () => void;
}

export function QuickView({ id, onClose }: QuickViewProps): React.ReactElement {
  // This prevents unnecessary recalculations when the component re-renders.
  const product = useMemo(() => PRODUCTS.find((product) => product.id === id), [id]);

  return (
    <Dialog
      open={!!id}
      onClickOutside={onClose}
      onEscape={onClose}
      onClose={onClose}
      size="md"
      padding={{ block: "none", inline: "none" }}
    >
      <Dialog.Body>
        <Grid cols={2}>
          <Carousel
            navigation={{
              renderPrev: (props) => (
                <Button
                  skin="secondary"
                  size="sm"
                  leftSlot={<Icon.ChevronLeft size={18} />}
                  iconOnly
                  {...props}
                />
              ),
              renderNext: (props) => (
                <Button
                  skin="secondary"
                  size="sm"
                  leftSlot={<Icon.ChevronRight size={18} />}
                  iconOnly
                  {...props}
                />
              )
            }}
          >
            {product?.images?.map((image) => (
              <AspectRatio ratio="2:3">
                <Image src={image} alt={product.name} width={600} height={600} />
              </AspectRatio>
            ))}
          </Carousel>

          <Box padding={{ block: "2xl", inline: "2xl" }}>
            <Stack direction="column" style={{ height: "100%" }}>
              <Text as="h4" space={{ y: "md" }}>
                {product?.name}
              </Text>

              <Text size="sm" skin="neutral" space={{ y: "lg" }}>
                {product?.brand} / {product?.tag}
              </Text>

              <Stack direction="column" gap="2xl">
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
              </Stack>

              <Action colors={product?.color} sizes={product?.sizes} stock={product?.stock} />
            </Stack>
          </Box>
        </Grid>
      </Dialog.Body>
    </Dialog>
  );
}
