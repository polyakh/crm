import {
    Menu,
    ActionIcon,
    Text,
    Divider,
    Group,
    Avatar
} from '@mantine/core';
import { UserCircle, Settings, Users, Gift, Building2, CreditCard, Apple as Apps, LogOut } from 'lucide-react';

function UserMenu () {
    return (
        <Menu
            position="bottom-end"
            offset={4}
            withArrow
            width={260}
        >
            <Menu.Target>
                <ActionIcon variant="subtle" size="lg">
                    <UserCircle size={24} />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label fw={600} fz="md">MY ACCOUNT</Menu.Label>

                <Menu.Item leftSection={<Settings size={16} />}>
                    Personal preferences
                </Menu.Item>

                <Menu.Item leftSection={<Gift size={16} />}>
                    Referral program
                </Menu.Item>

                <Divider my="xs" />

                <Menu.Label fw={600} fz="md">COMPANY OVERVIEW</Menu.Label>

                <Menu.Item leftSection={<Building2 size={16} />}>
                    Company settings
                </Menu.Item>

                <Menu.Item leftSection={<Users size={16} />}>
                    Manage users
                </Menu.Item>

                {/*<Menu.Item leftSection={<CreditCard size={16} />}>*/}
                {/*    Billing*/}
                {/*</Menu.Item>*/}

                <Divider my="xs" />

                <Menu.Item
                    leftSection={<LogOut size={16} />}
                    color="red"
                >
                    Log out
                </Menu.Item>

                <Menu.Divider />

                <Group p="xs">
                    <Avatar color="blue" radius="xl">AK</Avatar>
                    <div>
                        <Text size="sm" fw={500}>Alex Korzhikov</Text>
                        <Text size="xs" c="dimmed">alex@company.com</Text>
                    </div>
                </Group>
            </Menu.Dropdown>
        </Menu>
    );
};

export default UserMenu;