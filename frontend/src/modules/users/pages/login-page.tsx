import { Navigate } from 'react-router-dom';
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

function LoginPage() {
    const { user, signIn } = { user: {}, signIn: () => undefined };

    // if (user) {
    //     return <Navigate to="/dashboard" replace />;
    // }

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
                        Sign in to access your lead board
                    </Text>

                    <Stack>
                        <Button
                            variant="default"
                            leftSection={<Chrome size={18} />}
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

export default LoginPage