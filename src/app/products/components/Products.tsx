import React, { useState } from "react";
// Next
import Link from "next/link";
// UI Components
import { Theme, Box, Grid, Stack, Text, useTheme } from "@stewed/react";
// Partials
import { ProductItem, type ProductItemProps } from "./ProductItem";
import { QuickView } from "./QuickView";

interface ProductsProps {
  data: ProductItemProps[];
}

export function Products({ data }: ProductsProps): React.ReactElement {
  const { tokens } = useTheme();

  const [id, setId] = useState<number | undefined>(undefined);

  return (
    <>
      <Theme
        cssScope="product-item"
        tokens={{
          default: {
            ...tokens?.default,
            components: {
              button: {
                radius: "full"
              }
            }
          }
        }}
      >
        <Box fullHeight>
          {data.length ? (
            <Grid
              cols={1}
              responsive={{ sm: { cols: 2 }, md: { cols: 3 }, lg: { cols: 4 } }}
              gap="xl"
            >
              {data.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <ProductItem {...product} onQuickView={setId} />
                </Link>
              ))}
            </Grid>
          ) : (
            <Box padding={{ block: "9xl" }} fullWidth>
              <Stack direction="column" items="center" justify="center" style={{ height: "100%" }}>
                <Text size="2xl" weight="semi-bold" skin="neutral-faded" space={{ y: "sm" }}>
                  No products found
                </Text>
                <Text>Your search did not match any product</Text>
              </Stack>
            </Box>
          )}
        </Box>
      </Theme>
      <QuickView id={id} onClose={() => setId(undefined)} />
    </>
  );
}
