import { Users, Upload } from 'lucide-react';
import {
    Stack,
    Title,
    Text,
    Button,
    Group,
    ThemeIcon,
     Center,
} from '@mantine/core';

import { LeadAddButton } from '../lead-add-button'

function EmptyState() {
    return (
        <Center>
            <Stack align="center" gap="lg">
                <ThemeIcon size={80} radius="xl" variant="light" color="blue">
                    <Users size={48} />
                </ThemeIcon>

                <Title order={2}>No leads yet</Title>

                <Text c="dimmed" ta="center" maw={400}>
                    Get started by creating a new lead or import your existing contacts to begin managing your relationships.
                </Text>

                <Group>
                    <LeadAddButton />

                    <Button leftSection={<Upload size={20} />} variant="light" size="md">
                        Import Leads
                    </Button>
                </Group>
            </Stack>
        </Center>
    );
};

export default EmptyState;