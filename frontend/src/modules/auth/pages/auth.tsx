import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Chrome } from 'lucide-react';
import {
    Container,
    Paper,
    Title,
    Text,
    Button,
    Stack,
    Center,
    Box,
} from '@mantine/core';

export default function LoginPage() {
    const { user, signIn } = useAuthStore();

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <Box bg="gray.1" style={{ minHeight: '100vh' }}>
            <Container size="xs" pt={120}>
                <Center mb={40}>
                    <Title order={1} size="h2">
                        Welcome to PoliCRM
                    </Title>
                </Center>

                <Paper radius="md" p="xl" withBorder>
                    <Text c="dimmed" size="sm" ta="center" mb="xl">
                        Sign in to access your dashboard
                    </Text>

                    <Stack>
                        <Button
                            variant="default"
                            leftSection={<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome</title><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"/></svg>}
                            onClick={() => signIn('google')}
                            fullWidth
                        >
                            Sign in with Google
                        </Button>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}