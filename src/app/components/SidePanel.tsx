import React from "react";
// UI Components
import { Avatar, Box, TextField, ListBox, Text, Separator, Drawer } from "@stewed/react";
// Icons
import { FiFile, FiFilePlus, FiSearch, FiTrash, FiUsers, FiActivity } from "react-icons/fi";
// Hooks
import { useInput } from "@stewed/hooks";

interface SidePanelProps {
  open: boolean;
}

export function SidePanel({ open }: SidePanelProps): React.ReactElement {
  const searchInput = useInput("");

  return (
    <Drawer size="sm" open={open}>
      <Drawer.Header>
        <Box direction="column" gap="lg" grow>
          <Box direction="column" gap="lg" items="center">
            <Avatar name="Stewed Board" skin="primary" size="4xl" appearance="square" />
            <Text skin="primary" size="lg" weight="bold" variation="uppercase" whiteSpace="nowrap">
              Stewed Board
            </Text>
          </Box>
          <TextField
            {...searchInput}
            placeholder="Quick search"
            leftSlot={<FiSearch />}
            rightSlot={
              <Text skin="neutral" size="xs">
                ⌘K
              </Text>
            }
          />
        </Box>
      </Drawer.Header>
      <Separator />
      <Drawer.Body>
        <ListBox>
          <ListBox.Group>
            <ListBox.Item leftSlot={<FiActivity />}>Activity</ListBox.Item>
            <ListBox.Item leftSlot={<FiFile />} rightSlot={<FiUsers />} selected>
              All boards
            </ListBox.Item>
            <ListBox.Item leftSlot={<FiFilePlus />}>Tasks</ListBox.Item>
            <ListBox.Item skin="critical" leftSlot={<FiTrash />}>
              Trash
            </ListBox.Item>
          </ListBox.Group>
          <Separator space={{ block: "sm" }} />
          <ListBox.Group>
            <ListBox.Item>Lee Evans new tour</ListBox.Item>
            <ListBox.Item>Individual errors coast</ListBox.Item>
            <ListBox.Item>Re-skin signs</ListBox.Item>
            <ListBox.Item>Reflect roadmap</ListBox.Item>
            <ListBox.Item>Top of mind</ListBox.Item>
          </ListBox.Group>
        </ListBox>
      </Drawer.Body>
    </Drawer>
  );
}
