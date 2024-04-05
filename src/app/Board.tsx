import React from "react";
// UI Components
import { Avatar, Button, Card, Box, Text } from "@stewed/react";
// Icons
import { FiPlus } from "react-icons/fi";

const projects = [
  {
    id: "new-benefits-plan",
    title: "New Benefits Plan",
    category: "Human Resources",
    members: [
      {
        id: "mauro-vieira",
        name: "Mauro Vieira",
      },
      {
        id: "bruna-santos",
        name: "Bruna Santos",
      },
      {
        id: "lourenco-vieira",
        name: "Lourenço Vieira",
      },
    ],
  },
  {
    id: "onboarding-emails",
    title: "Onboarding Emails",
    category: "Customer Success",
    members: [
      {
        id: "mauro-vieira",
        name: "Mauro Vieira",
      },
      {
        id: "bruna-santos",
        name: "Bruna Santos",
      },
      {
        id: "lourenco-vieira",
        name: "Lourenço Vieira",
      },
    ],
  },
  {
    id: "api-integration",
    title: "API Integration",
    category: "Engineering",
    members: [
      {
        id: "mauro-vieira",
        name: "Mauro Vieira",
      },
      {
        id: "bruna-santos",
        name: "Bruna Santos",
      },
      {
        id: "lourenco-vieira",
        name: "Lourenço Vieira",
      },
    ],
  },
];

export function Board(): React.ReactElement {
  return (
    <Box direction="column" grow>
      <Box
        items="center"
        space={{
          y: "xl",
        }}
        justify="between"
        gap="lg">
        <Text as="h4" weight="normal">
          All boards
        </Text>
        <Button leftSlot={<FiPlus />}>New Project</Button>
      </Box>
      <div></div>
      <Box
        wrap="wrap"
        gap="2xl"
        responsive={{
          md: {
            wrap: "nowrap",
          },
        }}>
        {projects.map(({ id, title, category, members }) => (
          <Box key={id} gap="md" grow>
            <Card>
              <Card.Body>
                <Box direction="column" gap="sm" space={{ y: "xl" }}>
                  <Text weight="bold" size="lg">
                    {title}
                  </Text>
                  <Text skin="neutral">{category}</Text>
                </Box>
                <Avatar.Group>
                  {members.map(({ id, name }) => (
                    <Avatar key={id} size="xs" name={name} skin="neutral" />
                  ))}
                </Avatar.Group>
              </Card.Body>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
