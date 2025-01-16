import React from "react";
// UI Components
import { Hoverable, MotionProps, Text, Card, Motion, Box, Stack, Button } from "@stewed/react";
// Icons
import { IoEyeOutline, IoHeartOutline, IoStar } from "react-icons/io5";
// Types
import type { Product } from "../data";

export interface ProductItemProps extends Product {
  onQuickView?: (id: number) => void;
}

export function ProductItem({
  id,
  name,
  thumb,
  brand,
  price,
  rating,
  onQuickView
}: ProductItemProps): React.ReactElement {
  return (
    <Hoverable>
      {({ status, isTouch }) => {
        let animation: MotionProps["animation"] = "zoom-in-soft";

        if (status === "enter") {
          animation = "scale-in";
        }

        if (status === "leave") {
          animation = "scale-out";
        }

        return (
          <Card shadow="none" padding={{ inline: "none", block: "md" }}>
            <Motion animation={isTouch ? undefined : animation}>
              {({ className }) => (
                <Card.Media
                  style={{ height: 200, overflow: "hidden" }}
                  image={{
                    src: thumb,
                    loading: "eager",
                    className
                  }}
                >
                  {status === "enter" && (
                    <Motion animation="fade-in" duration="slowly">
                      <Box padding={{ inline: "md" }}>
                        <Stack direction="column" items="end" gap="sm">
                          <Button
                            size="sm"
                            skin="secondary"
                            leftSlot={<IoEyeOutline />}
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                              onQuickView?.(id);
                            }}
                            iconOnly
                          >
                            Quick View
                          </Button>
                          <Button size="sm" skin="secondary" leftSlot={<IoHeartOutline />} iconOnly>
                            Add to Favorites
                          </Button>
                        </Stack>
                      </Box>
                    </Motion>
                  )}
                </Card.Media>
              )}
            </Motion>
            <Card.Body>
              <Text size="sm" space={{ y: "xs" }} lineClamp={1}>
                {name}
              </Text>
              <Text size="xs" skin="neutral" space={{ y: "md" }}>
                {brand}
              </Text>
              <Stack gap="sm" justify="between" grow>
                {price.discount ? (
                  <>
                    <Stack gap="sm">
                      <Text weight="light" variation="line-through" skin="neutral-faded">
                        {price.value}
                        {price.currency}
                      </Text>
                      <Text weight="semi-bold">
                        {price.value - (price.value * price.discount) / 100}
                        {price.currency}
                      </Text>
                    </Stack>
                  </>
                ) : (
                  <Text weight="semi-bold">
                    {price.value}
                    {price.currency}
                  </Text>
                )}

                <Stack items="center" justify="end" gap="xxs">
                  <Text size="xs">{rating?.toFixed(1)}</Text>
                  <Text as="span" skin="warning">
                    <IoStar size={14} />
                  </Text>
                </Stack>
              </Stack>
            </Card.Body>
          </Card>
        );
      }}
    </Hoverable>
  );
}
