import { useState } from 'react';
import { Search, Bell, Settings, HelpCircle, UserCircle, Plus, Home, ChevronRight } from 'lucide-react';
import {
    Group,
    TextInput,
    Button,
    ActionIcon,
    Breadcrumbs,
    Anchor,
    Box,
    Divider
} from '@mantine/core';

function AppHeader() {
    const [opened, setOpened] = useState(false);

    const breadcrumbItems = [
        // { title: 'Dashboard', href: '#', icon: <Home size={16} /> },
        { title: 'Leads Inbox', href: '#', icon: null },
    ];

    const items = breadcrumbItems.map((item, index) => (
        <Anchor href={item.href} key={index} c={index === breadcrumbItems.length - 1 ? 'black' : 'dimmed'}>
            <Group gap="xs">
                {item.icon}
                <span>{item.title}</span>
            </Group>
        </Anchor>
    ));

    return (
        <>
            <Box py="md" px="lg" bg="white" style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
                <Group justify="space-between">
                    <Group gap="xl">
                        <Breadcrumbs separator={<ChevronRight size={16} />}>
                            {items}
                        </Breadcrumbs>

                        <TextInput
                            placeholder="Search leads, contacts, or documents..."
                            leftSection={<Search size={20} />}
                            style={{ width: '400px' }}
                        />
                    </Group>

                    <Group>
                        <Button
                            color='blue'
                            leftSection={<Plus size={20} />}
                            onClick={() => setOpened(true)}
                        >
                            Add New
                        </Button>

                        <ActionIcon variant="subtle" size="lg">
                            <Bell size={20} />
                        </ActionIcon>
                        <ActionIcon variant="subtle" size="lg">
                            <HelpCircle size={20} />
                        </ActionIcon>
                        <ActionIcon variant="subtle" size="lg">
                            <Settings size={20} />
                        </ActionIcon>

                        <Divider orientation="vertical" />

                        <ActionIcon variant="subtle" size="lg">
                            <UserCircle size={24} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Box>
        </>
    );
}

export default AppHeader;