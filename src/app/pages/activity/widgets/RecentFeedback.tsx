import React, { useMemo, useState } from "react";
// UI Components
import {
    Box,
    Text,
    Table,
    Avatar,
    Tag,
    Checkbox,
    Button,
    Pagination,
    Separator,
} from "@stewed/react";

type Team = {
    id: string;
    name: string;
    email: string;
    content: string;
    sentiment: "Positive" | "Negative" | "Neutral";
    selected: boolean;
};

export function RecentFeedback(): React.ReactElement {
    const [team, setTeam] = useState<Team[]>([
        {
            id: "1",
            name: "Henrique Vieira",
            email: "henrique.vieira@example.com",
            content:
                "We're looking to include a new calendar component, is this very difficult for me",
            sentiment: "Positive",
            selected: false,
        },
        {
            id: "2",
            name: "Mauro Vieira",
            email: "mauro.vieira@example.com",
            content:
                "We're looking to include a new calendar component, is this very difficult for me",
            sentiment: "Negative",
            selected: false,
        },
        {
            id: "3",
            name: "Lourenco Vieira",
            email: "lourenco.vieira@example.com",
            content:
                "We're looking to include a new calendar component, is this very difficult for me",
            sentiment: "Positive",
            selected: true,
        },
        {
            id: "4",
            name: "Bruna Santos",
            email: "bruna.santos@example.com",
            content:
                "We're looking to include a new calendar component, is this very difficult for me",
            sentiment: "Positive",
            selected: false,
        },
        {
            id: "5",
            name: "Daniel Reis Vieira",
            email: "daniel.vieira@example.com",
            content:
                "We're looking to include a new calendar component, is this very difficult for me",
            sentiment: "Neutral",
            selected: false,
        },
    ]);

    const isAllChecked = useMemo(
        () => team?.every(({ selected }) => selected),
        [team],
    );
    const isIndeterminate = useMemo(
        () => team.some(({ selected }) => selected),
        [team],
    );

    return (
        <Box direction="column">
            <Text as="h5" space={{ y: "xs" }}>
                Recent feedback
            </Text>
            <Text size="sm" skin="neutral" space={{ y: "3xl" }}>
                Find all of your customer feedback in one place.
            </Text>

            <Table hoverable>
                <Table.Head>
                    <Table.Row>
                        <Table.Cell as="th">
                            <Checkbox
                                indeterminate={
                                    isAllChecked ? undefined : isIndeterminate
                                }
                                checked={isAllChecked}
                                onChange={() => {
                                    setTeam((prev) =>
                                        prev.map((value) => ({
                                            ...value,
                                            selected: !isAllChecked,
                                        })),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell as="th">Name</Table.Cell>
                        <Table.Cell as="th">Content</Table.Cell>
                        <Table.Cell as="th">Sentiment</Table.Cell>
                        <Table.Cell as="th" />
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {team.map(
                        ({ id, name, email, content, sentiment, selected }) => (
                            <Table.Row
                                key={id}
                                selected={selected}
                                onClick={() => {
                                    setTeam((prev) =>
                                        prev.map((value) => ({
                                            ...value,
                                            selected:
                                                value.id === id
                                                    ? !value.selected
                                                    : value.selected,
                                        })),
                                    );
                                }}
                            >
                                <Table.Cell>
                                    <Checkbox
                                        checked={selected}
                                        onChange={() => {
                                            setTeam((prev) =>
                                                prev.map((value) => ({
                                                    ...value,
                                                    selected:
                                                        value.id === id
                                                            ? !value.selected
                                                            : value.selected,
                                                })),
                                            );
                                        }}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <Box items="center" gap="md">
                                        <Avatar
                                            skin="neutral"
                                            size="lg"
                                            name={name}
                                        />
                                        <Box direction="column">
                                            <Text size="sm" weight="medium">
                                                {name}
                                            </Text>
                                            <Text
                                                as="a"
                                                href=""
                                                size="xs"
                                                skin="neutral"
                                                alignment="end"
                                            >
                                                {email}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Table.Cell>
                                <Table.Cell>
                                    <Text
                                        size="sm"
                                        weight="light"
                                        lineClamp={2}
                                    >
                                        {content}
                                    </Text>
                                </Table.Cell>
                                <Table.Cell>
                                    <Tag
                                        skin={
                                            sentiment === "Positive"
                                                ? "success"
                                                : sentiment === "Negative"
                                                  ? "critical"
                                                  : "neutral"
                                        }
                                        appearance="ghost"
                                        size="sm"
                                    >
                                        {sentiment}
                                    </Tag>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button
                                        size="sm"
                                        skin="neutral"
                                        appearance="ghost"
                                        iconOnly
                                        leftSlot={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                                />
                                            </svg>
                                        }
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ),
                    )}
                </Table.Body>
            </Table>
            <Separator space={{ block: "lg" }} />
            <Pagination
                total={18}
                siblings={2}
                currentPage={1}
                alignment="center"
            />
        </Box>
    );
}
