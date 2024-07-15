"use client";
import React, { useState } from "react";
// UI Components
import {
  Text,
  Box,
  Card,
  TextField,
  Button,
  Switch,
  Separator,
  FormField,
  Dialog,
  Select,
} from "@stewed/react";
// Hooks
import { useSelect, useStateForm } from "@stewed/hooks";

interface SignUpForm {
  username: string;
  email: string;
  gender: "Prefer not to respond" | "Woman" | "Man";
  password: string;
}

export function SignUp(): React.ReactElement {
  const [isOpen, setOpen] = useState(false);

  const { formData, onFormChange, onFormReset } = useStateForm<SignUpForm>({
    initialValues: {
      username: "",
      email: "",
      gender: "Prefer not to respond",
      password: "",
    },
    validators: ({ username, email, password }) => ({
      username: {
        condition: () => {
          return username ? username.length > 3 && /^[a-zA-Z0-9]+$/.exec(username) !== null : true;
        },
        description: "Username can only contain letters or digits.",
      },
      email: {
        condition: () => {
          return email ? /[\d%+._a-z-]+@[\d.a-z-]+.[a-z]{2,}$/.exec(email) !== null : true;
        },
        description: "The email address is not valid, make sure it follows the standard format.",
      },
      password: {
        condition: () => {
          return password ? /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.exec(password) !== null : true;
        },
        description:
          "Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 8 characters.",
      },
    }),
  });

  const notValidForm = Object.values(formData).some(({ valid }) => !valid);

  return (
    <>
      <Card>
        <Card.Header>
          <Text as="h2">Create your account</Text>
        </Card.Header>

        <Card.Body>
          <Box direction="column" gap="2xl">
            <Box direction="column" gap="md">
              <FormField>
                <FormField.Label htmlFor="username">Username</FormField.Label>
                <FormField.Control>
                  <TextField
                    id="username"
                    type="text"
                    name="username"
                    value={formData.username.value}
                    onChange={onFormChange}
                    skin={formData.username.valid ? "default" : "critical"}
                    placeholder="Enter your username"
                  />
                </FormField.Control>
                <FormField.Description>
                  You can use letters, numbers, and periods.
                </FormField.Description>
                <FormField.Error hidden={formData.username.valid}>
                  {formData.username.error}
                </FormField.Error>
              </FormField>

              <FormField>
                <FormField.Label htmlFor="gender">Gender</FormField.Label>
                <FormField.Control>
                  <Select
                    id="gender"
                    value={formData.gender.value}
                    name="gender"
                    onChange={onFormChange}>
                    <Select.Option value="Woman">Woman</Select.Option>
                    <Select.Option value="Man">Man</Select.Option>
                    <Select.Option value="Non-binary/non-conforming">
                      Non-binary/non-conforming
                    </Select.Option>
                    <Select.Option value="Prefer not to respond">
                      Prefer not to respond
                    </Select.Option>
                  </Select>
                </FormField.Control>
              </FormField>

              <FormField>
                <FormField.Label htmlFor="email">Email</FormField.Label>
                <FormField.Control>
                  <TextField
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email.value}
                    onChange={onFormChange}
                    skin={formData.email.valid ? "default" : "critical"}
                    placeholder="Enter your email"
                  />
                </FormField.Control>
                <FormField.Error hidden={formData.email.valid}>
                  {formData.email.error}
                </FormField.Error>
              </FormField>

              <FormField>
                <FormField.Label htmlFor="password">Password</FormField.Label>
                <FormField.Control>
                  <TextField
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password.value}
                    onChange={onFormChange}
                    skin={formData.password.valid ? "default" : "critical"}
                    placeholder="Enter your password"
                  />
                </FormField.Control>
                <FormField.Description>
                  Use 8 or more characters with a mix of letters, numbers, and symbols.
                </FormField.Description>
                <FormField.Error hidden={formData.password.valid}>
                  {formData.password.error}
                </FormField.Error>
              </FormField>
            </Box>
          </Box>
          <Separator space={{ block: "xl" }} />
          <Box items="start" justify="between">
            <Box direction="column">
              <Text weight="semi-bold">Favorites</Text>
              <Text size="xs" skin="neutral">
                Receive notifications when there is activity related to your favorite items.
              </Text>
            </Box>
            <Box gap="md" direction="column" items="baseline">
              <Switch size="sm">Push</Switch>
              <Switch size="sm">Email</Switch>
              <Switch size="sm">Slack</Switch>
            </Box>
          </Box>
          <Separator space={{ block: "xl" }} />
          <Box items="start" justify="between">
            <Box direction="column">
              <Text weight="semi-bold">New documents</Text>
              <Text size="xs" skin="neutral">
                Receive notifications whenever people on your team create new documents.
              </Text>
            </Box>
            <Box gap="md" direction="column" items="baseline">
              <Switch size="sm">Push</Switch>
              <Switch size="sm">Email</Switch>
              <Switch size="sm">Slack</Switch>
            </Box>
          </Box>
        </Card.Body>
        <Separator />
        <Card.Footer>
          <Box justify="end" gap="md">
            <Button skin="neutral" appearance="outline" onClick={(): void => onFormReset()}>
              Clean
            </Button>
            <Button disabled={notValidForm} onClick={(): void => setOpen(true)}>Create an account</Button>
          </Box>
        </Card.Footer>
      </Card>

      <Dialog open={isOpen} size="sm">
        <Dialog.Header>
          <Text as="h4">Are you ready to create your account?</Text>
        </Dialog.Header>
        <Dialog.Body>
          <Text size="sm" skin="neutral">
            By proceeding, you'll be establishing a new account with us. Your information will be
            securely stored on our servers for your future access.
          </Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Box gap="md" justify="end">
            <Button
              skin="neutral"
              appearance="outline"
              type="button"
              onClick={(): void => setOpen(false)}>
              Cancel
            </Button>
            <Button as="a" href="/" skin="success">
              Create Account
            </Button>
          </Box>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
