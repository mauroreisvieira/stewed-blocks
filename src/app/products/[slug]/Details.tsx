"use client";

import React, { useMemo } from "react";

import Image from "next/image";
import { notFound } from "next/navigation";
// UI Components
import { Text, Container, Stack, Box, Grid, Tag, Carousel, Button, Icon } from "@stewed/react";
// Partials
import { Products } from "../components/Products";
import { Reviews } from "../components/Reviews";
import { Action } from "../components/Action";
// Icons
import { HiStar } from "react-icons/hi";
// Data
import { PRODUCTS, REVIEWS } from "../data";

interface DetailsProps {
  slug: string;
}

export function Details({ slug }: DetailsProps): React.ReactElement {
  // This prevents unnecessary recalculations when the component re-renders.
  const product = useMemo(() => PRODUCTS.find((product) => product.slug === slug), [slug]);

  if (!product) {
    notFound();
  }

  const reviews = useMemo(
    () => REVIEWS.filter((review) => review.productsId === product?.id),
    [product?.id]
  );

  const related = useMemo(
    () =>
      PRODUCTS.filter(
        ({ id, brand, tag, color }) =>
          product &&
          product.id !== id &&
          (brand.includes(product.brand) ||
            product.tag === tag ||
            color.some((value) => product.color.includes(value)))
      ).slice(0, 4),
    [product]
  );

  return (
    <Box>
      <Container screen="xl" alignment="center" padding={{ block: "7xl", inline: "lg" }}>
        <Box as="section" space={{ y: "8xl" }}>
          <Grid gap="2xl" cols={1} responsive={{ md: { cols: 2 } }}>
            <Carousel
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
                    leftSlot={<Icon.ChevronRight size={18} />}
                    iconOnly
                    {...props}
                  />
                )
              }}
            >
              {product?.images?.map((image) => (
                <Image key={image} src={image} alt={product.name} width={600} height={600} />
              ))}
            </Carousel>

            <Stack direction="column">
              <Text as="h3" space={{ y: "md" }}>
                {product?.name}
              </Text>

              <Text size="sm" skin="neutral" space={{ y: "2xl" }}>
                {product?.brand} / {product?.tag}
              </Text>

              <Stack direction="column" gap="2xl">
                <Stack gap="sm" grow>
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

                  {!!product?.price.discount && (
                    <Tag size="xs">{product.price.discount}% of discount</Tag>
                  )}
                </Stack>

                {product?.rating && (
                  <Stack items="center" gap="sm">
                    <Stack direction="row">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Text
                          key={crypto.randomUUID()}
                          as="div"
                          skin={
                            index + 1 <= Math.floor(product.rating) ? "warning" : "neutral-faded"
                          }
                        >
                          <HiStar size={24} />
                        </Text>
                      ))}
                    </Stack>

                    <Text as="a" href="/" skin="neutral" size="xs">
                      ({reviews.length} reviews)
                    </Text>
                  </Stack>
                )}

                <Text as="div" size="sm" whiteSpace="pre-wrap">
                  {product?.description}
                </Text>

                <Action sizes={product?.sizes} colors={product?.color} stock={product?.stock} />
              </Stack>
            </Stack>
          </Grid>
        </Box>

        {!!related.length && (
          <Box as="section">
            <Text size="lg" weight="semi-bold" space={{ y: "xs" }}>
              You May Also Like
            </Text>
            <Text size="sm" skin="neutral" space={{ y: "2xl" }}>
              {"Browse similar products to the ones you're viewing"}
            </Text>
            <Products data={related} />
          </Box>
        )}

        {!!reviews.length && <Reviews rate={product?.rating} reviews={reviews} />}
      </Container>
    </Box>
  );
}
