import React, { useMemo, useState } from "react";
// UI Components
import {
  Box,
  Grid,
  Stack,
  Progress,
  Button,
  Avatar,
  Separator,
  Text,
  TextArea,
  Drawer,
  Container
} from "@stewed/react";
// Hooks
import { useFetchImages } from "@/hooks/useFetchImages";
// Icons
import { HiStar } from "react-icons/hi";
// Data
import { type Reviews } from "../data";

interface ReviewsProps {
  rate?: number;
  reviews: Reviews[];
}

export function Reviews({ rate, reviews }: ReviewsProps): React.ReactElement {
  const [open, setOpen] = useState(false);

  const { data: profiles } = useFetchImages({ query: "profile", perPage: reviews.length });

  const [hover, setHover] = useState(0);

  const reviewAnalysis = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      // Handle no reviews scenario
      return Array.from({ length: 5 }, (_, index) => ({
        rate: 5 - index, // Rates from 5 to 1
        percentage: 0
      }));
    }

    const totalReviews = reviews.length;
    const rateDistribution = new Map<number, number>();

    // Calculate distribution
    reviews.forEach(({ rating }) => {
      rateDistribution.set(rating, (rateDistribution.get(rating) || 0) + 1);
    });

    // Map the distribution to percentages and fill missing rates
    return Array.from({ length: 5 }, (_, index) => {
      const rate = 5 - index; // Rates from 5 to 1
      const count = rateDistribution.get(rate) || 0;
      return {
        rate,
        percentage: Math.round((count / totalReviews) * 100)
      };
    });
  }, [reviews]);

  return (
    <>
      <Box as="section">
        <Grid cols={1} responsive={{ md: { cols: 5 } }} gap="9xl">
          <Grid.Item responsive={{ md: { colSpan: 2 } }}>
            <Stack direction="column">
              <Text as="h4" space={{ y: "md" }}>
                Customer Reviews
              </Text>

              <Box space={{ y: "xl" }}>
                {rate && (
                  <Stack items="center" gap="sm">
                    <Stack direction="row">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Text
                          key={crypto.randomUUID()}
                          as="div"
                          skin={index + 1 <= Math.floor(rate) ? "warning" : "neutral-faded"}
                        >
                          <HiStar size={20} />
                        </Text>
                      ))}
                    </Stack>

                    <Text skin="neutral" size="xs">
                      based on {reviews.length} reviews
                    </Text>
                  </Stack>
                )}
              </Box>

              <Box space={{ y: "4xl" }}>
                <Stack direction="column" gap="md">
                  {reviewAnalysis.map(({ rate, percentage }) => (
                    <Stack key={rate} gap="sm" items="baseline">
                      <Stack gap="xs" direction="column" grow>
                        <Stack justify="between">
                          <Text size="xs" weight="semi-bold">
                            {rate} <HiStar size={10} />
                          </Text>
                          <Text size="xs" skin="neutral-faded">
                            {percentage}%
                          </Text>
                        </Stack>
                        <Progress value={percentage} />
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Text size="lg" weight="semi-bold" space={{ y: "xs" }}>
                  Drop your thoughts
                </Text>
                <Text size="sm" skin="neutral" space={{ y: "2xl" }}>
                  Got something to say about this? Share your take with everyone.
                </Text>

                <Button size="lg" onClick={() => setOpen(true)} fullWidth>
                  Write a review
                </Button>
              </Box>
            </Stack>
          </Grid.Item>

          <Grid.Item responsive={{ md: { colSpan: 3 } }}>
            {reviews.slice(0, 5).map(({ name, rating, review }, idx) => (
              <Box key={name}>
                <Stack direction="column" gap="lg">
                  <Stack gap="md" items="center">
                    <Avatar name={name} image={{ src: profiles?.results[idx]?.urls.thumb }} />
                    <Stack direction="column" gap="xs">
                      <Text size="xs" weight="medium">
                        {name}
                      </Text>
                      <Stack>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Text
                            key={crypto.randomUUID()}
                            as="div"
                            skin={index + 1 <= Math.floor(rating) ? "warning" : "neutral-faded"}
                          >
                            <HiStar size={16} />
                          </Text>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                  <Text variation={"italic"} size="sm" skin="neutral">
                    {review}
                  </Text>
                </Stack>
                <Separator space={{ block: "2xl" }} />
              </Box>
            ))}
          </Grid.Item>
        </Grid>
      </Box>

      <Drawer
        size="sm"
        placement="bottom"
        open={open}
        onEscape={() => setOpen(false)}
        onClickOutside={() => setOpen(false)}
      >
        <Drawer.Body>
          <Container screen="sm" alignment="center">
            <Text size="lg" weight="semi-bold" space={{ y: "xs" }}>
              Drop your thoughts
            </Text>
            <Text size="sm" skin="neutral" space={{ y: "lg" }}>
              Got something to say about this? Share your take with everyone.
            </Text>

            <Box space={{ y: "2xl" }}>
              <Stack>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Text
                    key={crypto.randomUUID()}
                    style={{ cursor: "pointer" }}
                    as="span"
                    skin={index + 1 <= hover ? "warning" : "neutral-faded"}
                    onMouseEnter={() => setHover(index + 1)}
                  >
                    <HiStar size={24} />
                  </Text>
                ))}
              </Stack>
            </Box>

            <Box space={{ y: "2xl" }}>
              <TextArea placeholder="Write your review here..." rows={4} />
            </Box>
            <Stack justify="between">
              <Button appearance="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button>Submit</Button>
            </Stack>
          </Container>
        </Drawer.Body>
      </Drawer>
    </>
  );
}
