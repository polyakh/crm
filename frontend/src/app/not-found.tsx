import React from 'react';
import { FileQuestion } from 'lucide-react';
import {
    Container,
    Title,
    Text,
    Button,
    Group,
    Stack,
    ThemeIcon,
    Paper,
    Box
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box
            style={{
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container size="md">
                <Paper shadow="xs" p="xl" radius="md">
                    <Stack align="center" gap="lg">
                        <ThemeIcon size={100} radius="xl" variant="light" color="blue">
                            <FileQuestion size={60} />
                        </ThemeIcon>

                        <Title order={1} ta="center">Page not found</Title>

                        <Text c="dimmed" size="lg" ta="center" maw={600}>
                            The page you are looking for might have been removed, had its name changed,
                            or is temporarily unavailable.
                        </Text>

                        <Group>
                            <Button
                                size="md"
                                color="blue"
                                onClick={() => navigate('/')}
                            >
                                Back to Home
                            </Button>
                            <Button
                                variant="light"
                                color="blue"
                                size="md"
                                onClick={() => navigate(-1)}
                            >
                                Go Back
                            </Button>
                        </Group>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default NotFound;