import React from "react";
// UI Components
import {
  Avatar,
  Box,
  TextField,
  ListBox,
  Text as Text,
  Separator,
} from "@stewed/react";
// Icons
import { FiFile, FiFilePlus, FiSearch, FiTrash, FiUsers, FiActivity } from "react-icons/fi";
// Hooks
import { useInput } from "@stewed/hooks";

export function SidePanel(): React.ReactElement {
  const searchInput = useInput("");
  return (
    <Box gap="2xl" direction="column">
      <Box gap="lg" items="center" grow>
        <Avatar name="Stewed Board" skin="primary" appearance="square" />
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
    </Box>
  );
}
