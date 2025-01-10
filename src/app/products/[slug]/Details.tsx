"use client";

import React, { useMemo, useState } from "react";
// UI Components
import {
  Text,
  Container,
  Stack,
  Box,
  Grid,
  Tag,
  FormField,
  Group,
  Button,
  TextField,
  Carousel,
  AspectRatio
} from "@stewed/react";
// Partials
import { Products } from "../components/Products";
import { Reviews } from "../components/Reviews";
// Hooks
import { useFetchImages } from "@/hooks/useFetchImages";
import { useInput } from "@stewed/hooks";
// Icons
import { HiStar, HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
// Data
import { PRODUCTS, SIZES, REVIEWS } from "../data";
import Image from "next/image";

interface DetailsProps {
  slug: string;
}

export function Details({ slug }: DetailsProps): React.ReactElement {
  const { data: images } = useFetchImages({ query: slug, perPage: 5 });

  // This prevents unnecessary recalculations when the component re-renders.
  const product = useMemo(() => PRODUCTS.find((product) => product.slug === slug), [slug]);

  const reviews = useMemo(
    () => REVIEWS.filter((review) => review.productsId === product?.id),
    [product?.id]
  );

  const reviewAnalysis = useMemo(() => {
    const distribution = reviews.reduce(
      (acc, { rating }) => {
        acc[product?.rating] = (acc[product.rating] || 0) + 1;

        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    );

    return Object.entries(distribution)
      .map(([rate, count]) => ({
        rate: Number(rate),
        percentage: Math.round((count / reviews.length) * 100)
      }))
      .reverse();
  }, [product.rating, reviews]);

  // State to manage the selected size of the product
  const [selectedSize, setSelectedSize] = useState("");

  // State to manage the selected color of the product
  const [selectedColor, setSelectedColor] = useState("");

  // Using a custom hook `useInput` to manage the input value for the quantity.
  const { value, setValue, onChange } = useInput<number>(1);

  const related = useMemo(
    () =>
      PRODUCTS.filter(
        ({ id, category }) => product && product.id !== id && category.includes(product.category)
      ).slice(1, 5),
    [product]
  );

  return (
    <Box>
      <Container screen="xl" alignment="center" padding={{ block: "7xl", inline: "lg" }}>
        <Box as="section" space={{ y: "8xl" }}>
          <Grid gap="2xl" cols={1} responsive={{ md: { cols: 2 } }}>
            <Carousel>
              {images?.results.map(({ urls, alt_description }) => (
                <AspectRatio key={urls.raw} ratio="1:1" radius="md">
                  <Image src={urls.raw} alt={alt_description} width={600} height={600} />
                </AspectRatio>
              ))}
            </Carousel>

            <Stack direction="column">
              <Text as="h3" space={{ y: "md" }}>
                {product?.name}
              </Text>

              <Text size="sm" skin="neutral" space={{ y: "2xl" }}>
                {product?.category} / {product?.tag}
              </Text>

              <Stack direction="column" gap="2xl">
                <Stack gap="sm" grow>
                  {product?.discount && (
                    <Text size="3xl" weight="light" variation="line-through" skin="neutral-faded">
                      {(product.price.value * product?.discount) / 100}
                      {product.price.currency}
                    </Text>
                  )}

                  <Text size="3xl" weight="semi-bold">
                    {product?.price.value}
                    {product?.price.currency}
                  </Text>

                  {product?.discount && <Tag size="xs">{product.discount}% of discount</Tag>}
                </Stack>

                {product?.rating && (
                  <Stack items="center" gap="sm">
                    <Stack direction="row">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Text
                          key={crypto.randomUUID()}
                          as="div"
                          skin={
                            index + 1 <= Math.floor(product.rating)
                              ? "warning"
                              : "neutral-faded"
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

                <Box space={{ y: "lg" }}>
                  <Stack direction="column" gap="xl">
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
                  </Stack>
                </Box>

                <Stack direction="row" gap="md">
                  <Button appearance="outline" size="lg" fullWidth>
                    Add to cart
                  </Button>
                  <Button skin="primary" size="lg" fullWidth>
                    Checkout now
                  </Button>
                </Stack>
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
