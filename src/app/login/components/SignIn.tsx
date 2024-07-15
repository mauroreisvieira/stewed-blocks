"use client";

import React from "react";
// UI Components
import { Text, Box, Card, Theme, TextField, Button, Checkbox } from "@stewed/react";
// Icons
import { FiEye } from "react-icons/fi";

export function SignIn(): React.ReactElement {
  return (
    <Card>
      <Card.Header>
        <Text as="h2">Sign in to your account</Text>
      </Card.Header>
      <Card.Body>
        <Box direction="column" gap="2xl">
          <Box direction="column" gap="sm">
            <Text as="label" size="sm" htmlFor="email">
              Email address
            </Text>
            <TextField id="email" type="email" placeholder="Enter your email" />
          </Box>
          <Box direction="column" gap="sm">
            <Box justify="between">
              <Text as="label" size="sm" htmlFor="password">
                Password
              </Text>
              <Text as="a" href="" size="xs">
                Forgot password?
              </Text>
            </Box>
            <TextField
              id="password"
              type="password"
              placeholder="Enter your password"
              rightSlot={
                <Button skin="neutral" appearance="ghost" leftSlot={<FiEye />} size="sm" iconOnly>
                  Show password
                </Button>
              }
            />
          </Box>
          <Box justify="between" gap="lg" wrap="wrap">
            <Checkbox>Keep me logged in</Checkbox>
            <Box justify="end" gap="md">
              <Button as="a" href="/register" appearance="outline">Create an account</Button>
              <Button>Sign in</Button>
            </Box>
          </Box>
        </Box>
      </Card.Body>
    </Card>
  );
}
