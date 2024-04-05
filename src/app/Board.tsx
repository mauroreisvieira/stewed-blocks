import React, { useRef, useState } from "react";
// UI Components
import {
    Avatar,
    Button,
    Card,
    Box,
    Text,
    Separator,
    FormField,
    Dialog,
    TextField,
    Select,
    Switch,
} from "@stewed/react";
// Icons
import { TbPin } from "react-icons/tb";
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
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <Box direction="column" grow>
                <Box
                    items="center"
                    space={{
                        y: "xl",
                    }}
                    justify="between"
                    gap="lg"
                >
                    <Box direction="column">
                        <Text as="h4" weight="bold">
                            All boards
                        </Text>
                        <Text size="sm" skin="neutral">
                            All information organized in single place.
                        </Text>
                    </Box>
                    <Button
                        size="lg"
                        leftSlot={<FiPlus />}
                        iconOnly
                        onClick={() => setDialogOpen((prev) => !prev)}
                    >
                        New board
                    </Button>
                </Box>
                <Box
                    wrap="wrap"
                    gap="2xl"
                    responsive={{
                        md: {
                            wrap: "nowrap",
                        },
                    }}
                >
                    {projects.map(({ id, title, category, members }) => (
                        <Box key={id} gap="md" grow>
                            <Card>
                                <Card.Body>
                                    <Box
                                        direction="column"
                                        gap="sm"
                                        space={{ y: "xl" }}
                                    >
                                        <Text weight="bold" size="lg">
                                            {title}
                                        </Text>
                                        <Text skin="neutral">{category}</Text>
                                    </Box>
                                    <Avatar.Group>
                                        {members.map(({ id, name }) => (
                                            <Avatar
                                                key={id}
                                                size="xs"
                                                name={name}
                                                skin="primary"
                                            />
                                        ))}
                                    </Avatar.Group>
                                </Card.Body>
                            </Card>
                        </Box>
                    ))}
                </Box>

                <Card>
                    <Card.Header>
                        <Box items="baseline" justify="between" gap="2xl">
                            <Text as="h5">Recent activity</Text>
                            <Button
                                size="sm"
                                leftSlot={<TbPin />}
                                appearance="ghost"
                                iconOnly
                            >
                                Bookmark
                            </Button>
                        </Box>
                        <Text size="sm" skin="neutral">
                            Review what has happened over the past days.
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <Box justify="between" gap="2xl" wrap="wrap">
                            <Box gap="md" items="center">
                                <Avatar size="md" name="Lourenço Vieira" />
                                <Box direction="column">
                                    <Text weight="medium">Lourenço Vieira</Text>
                                    <Text size="sm" skin="neutral">
                                        Purchased 15 office chairs and 2 drum
                                        sets
                                    </Text>
                                </Box>
                            </Box>
                            <Text size="xs" skin="neutral">
                                June 21, 9:43 am
                            </Text>
                        </Box>
                        <Separator space={{ block: "2xl" }} />
                        <Box justify="between" gap="2xl" wrap="wrap">
                            <Box gap="md" items="center">
                                <Avatar size="md" name="Henrique Vieira" />
                                <Box direction="column">
                                    <Text weight="medium">Henrique Vieira</Text>
                                    <Text size="sm" skin="neutral">
                                        Updated client details for{" "}
                                        <Text as="a" size="sm" href="">
                                            Acme Co.
                                        </Text>
                                    </Text>
                                </Box>
                            </Box>
                            <Text size="xs" skin="neutral">
                                June 20, 3:30 pm
                            </Text>
                        </Box>
                    </Card.Body>
                </Card>
            </Box>
            <Dialog
                size="md"
                open={dialogOpen}
                onEscape={() => setDialogOpen(false)}
                onClickOutside={() => setDialogOpen(false)}
                onClose={() => setDialogOpen(false)}
            >
                <Dialog.Header>
                    <Text as="h4">New Board</Text>
                    <Text size="sm" skin="neutral">
                        Add new information to your board and save it
                    </Text>
                </Dialog.Header>
                <Separator />
                <Dialog.Body>
                    <Box direction="column" gap="xl">
                        <FormField>
                            <FormField.Label htmlFor="name">
                                Name
                            </FormField.Label>
                            <FormField.Control>
                                <TextField
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </FormField.Control>
                        </FormField>
                        <FormField>
                            <FormField.Label htmlFor="assign">
                                Assign
                            </FormField.Label>
                            <FormField.Control>
                                <Select id="assign">
                                    <Select.Option value={"Oliver"}>
                                        Oliver
                                    </Select.Option>
                                    <Select.Option value={"Anne"}>
                                        Anne
                                    </Select.Option>
                                    <Select.Option value={"John"}>
                                        John
                                    </Select.Option>
                                    <Select.Option value={"Tom"}>
                                        Tom
                                    </Select.Option>
                                </Select>
                            </FormField.Control>
                        </FormField>
                    </Box>
                    <Separator space={{ block: "xl" }} />
                    <Box items="baseline" justify="between" gap="md">
                        <Box direction="column">
                            <Text weight="semi-bold">Comments</Text>
                            <Text size="xs" skin="neutral">
                                Receive notifications when someone comments on
                                your documents or mentions you.
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
                            <Text weight="semi-bold">Favorites</Text>
                            <Text size="xs" skin="neutral">
                                Receive notifications when there is activity
                                related to your favorite items.
                            </Text>
                        </Box>
                        <Box gap="md" direction="column" items="baseline">
                            <Switch size="sm">Push</Switch>
                            <Switch size="sm">Email</Switch>
                            <Switch size="sm">Slack</Switch>
                        </Box>
                    </Box>
                </Dialog.Body>
                <Separator />
                <Dialog.Footer>
                    <Box justify="end" gap="md">
                        <Button
                            appearance="outline"
                            onClick={() => setDialogOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button>Save Changes</Button>
                    </Box>
                </Dialog.Footer>
            </Dialog>
        </>
    );
}
