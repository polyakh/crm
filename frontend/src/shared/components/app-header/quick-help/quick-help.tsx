import React, { useState } from 'react';
import {
    Drawer,
    TextInput,
    Stack,
    Title,
    Text,
    Button,
    Group,
    Badge,
    ActionIcon,
    Box,
    Divider,
    Anchor
} from '@mantine/core';
import {
    Search,
    X,
    BookOpen,
    GraduationCap,
    Users as Community,
    Bell as WhatsNew,
    MessageCircle
} from 'lucide-react';

interface QuickHelpProps {
    opened: boolean;
    onClose: () => void;
}

const QuickHelp: React.FC<QuickHelpProps> = ({ opened, onClose }) => {
    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            position="right"
            size="400px"
            title={
                <Group justify="space-between" w="100%">
                    <Title order={3}>Quick Help</Title>
                    <ActionIcon onClick={onClose} variant="subtle">
                        <X size={20} />
                    </ActionIcon>
                </Group>
            }
        >
            <Stack gap="md">
                <TextInput
                    placeholder="Search all articles"
                    leftSection={<Search size={16} />}
                    size="md"
                />
                <Title order={5} mt="md">SUGGESTED ARTICLES</Title>
                <Stack gap="xs">
                    <Anchor component="button">Live Chat</Anchor>
                    <Anchor component="button">Leads Inbox</Anchor>
                    <Anchor component="button">Adding leads to my Leads Inbox</Anchor>
                    <Anchor component="button">Lead labels</Anchor>
                    <Anchor component="button">Chatbot</Anchor>
                </Stack>

                <Divider my="md" />

                <Title order={5}>QUICK LINKS</Title>
                <Stack gap="md">
                    <Group>
                        <BookOpen size={20} color="var(--mantine-color-blue-6)" />
                        <Anchor component="button">Knowledge Base</Anchor>
                    </Group>

                    <Group>
                        <GraduationCap size={20} color="var(--mantine-color-blue-6)" />
                        <Anchor component="button">Academy training videos</Anchor>
                    </Group>

                    <Group>
                        <Community size={20} color="var(--mantine-color-blue-6)" />
                        <Anchor component="button">Community</Anchor>
                    </Group>

                    <Group>
                        <WhatsNew size={20} color="var(--mantine-color-blue-6)" />
                        <Anchor component="button">What's new</Anchor>
                    </Group>
                </Stack>

                <Divider my="md" />

                <Group justify="center">
                    <MessageCircle size={20} color="var(--mantine-color-blue-6)" />
                    <Anchor component="button" c="blue">Chat with us</Anchor>
                </Group>
            </Stack>
        </Drawer>
    );
};

export default QuickHelp;