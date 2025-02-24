import React from 'react';
import {
    Container,
    Stack,
    Loader,
    Text,
    Paper
} from '@mantine/core';

const Loading: React.FC = () => {
    return (
        <Container size="md" py="xl">
            <Paper shadow="xs" p="xl" radius="md">
                <Stack align="center" gap="md">
                    <Loader size="xl" type="dots" />
                    <Text c="dimmed" size="sm">Loading...</Text>
                </Stack>
            </Paper>
        </Container>
    );
};

export default Loading;