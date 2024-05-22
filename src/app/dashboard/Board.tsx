"use client";

import React from "react";
// UI Components
import { Avatar, Button, Card, Box, Text, Separator, Tag, Grid, Tooltip } from "@stewed/react";

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
  {
    id: "interview",
    title: "Interview",
    category: "RH",
    members: [
      {
        id: "mauro-vieira",
        name: "Mauro Vieira",
      },
    ],
  },
];

export function Board(): React.ReactElement {
  return (
    <Box direction="column">
      <Box direction="column" grow>
        <Text as="h4" weight="normal">
          All boards
        </Text>
        <Separator space={{ block: "2xl" }} />

        <Grid cols={1} gap="xl" responsive={{ sm: { cols: 3 } }}>
          {projects.map(({ id, title, category, members }) => (
            <Card key={id}>
              <Card.Body>
                <Box direction="column" gap="sm" space={{ y: "xl" }}>
                  <Text weight="bold" size="lg">
                    {title}
                  </Text>
                  <div>
                    <Tag size="sm" appearance="soft" skin="primary">
                      {category}
                    </Tag>
                  </div>
                </Box>
                <Avatar.Group>
                  {members.map(({ id, name }) => (
                    <Tooltip<HTMLDivElement>
                      placement="top"
                      key={id}
                      content={
                        <Text skin="inherit" size="xs">
                          {name}
                        </Text>
                      }>
                      {(props) => (
                        <div {...props}>
                          <Avatar size="xs" name={name} skin="neutral" />
                        </div>
                      )}
                    </Tooltip>
                  ))}
                </Avatar.Group>
              </Card.Body>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
