import { Users, Calendar, BarChart, Mail, Menu } from 'lucide-react';
import {
    NavLink,
    Stack,
    Group,
    Title,
    ActionIcon,
    Box
} from '@mantine/core';

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (collapsed: boolean) => void;
}

const navItems = [
    { icon: Users, label: 'Leads', active: true },
    { icon: Calendar, label: 'Calendar' },
    { icon: BarChart, label: 'Analytics' },
    { icon: Mail, label: 'Emails' },
];

function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    return (
        <Box
            w={isCollapsed ? 60 : 240}
            h="100vh"
            bg="white"
            style={{ borderRight: '1px solid var(--mantine-color-gray-2)' }}
        >
            <Group h={64} px="md" justify="space-between" style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
                {!isCollapsed && (
                    <Title order={4}>PoliCRM</Title>
                )}
                <ActionIcon onClick={() => setIsCollapsed(!isCollapsed)} variant="subtle">
                    <Menu size={20} />
                </ActionIcon>
            </Group>

            <Stack gap={4} p="xs">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        leftSection={<item.icon size={20} />}
                        label={!isCollapsed ? item.label : undefined}
                        active={item.active}
                        variant="filled"
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default Sidebar;