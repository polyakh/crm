import { List, Text, Group, Title, Loader, Alert, Space } from '@mantine/core';
import {  useAllUsers } from '../modules/users/hooks'

function App() {
    const { isLoading, users, error} = useAllUsers()

    if (isLoading) {
        return <Loader color="blue" />;
    }

    if (error) {
        return (
            <Alert title="Error" color="red">
                {error.message}
            </Alert>
        );
    }

    if (!users || users.length === 0) {
        return <Text>No users found.</Text>;
    }

    return (
        <>
            <Title order={2}>User List</Title>
            <Space h="md" />
            <List spacing="sm" size="sm" withPadding>
                {users.map((user) => (
                    <List.Item key={user.id}>
                        <Group>
                            <Text >{user.name}</Text>
                            <Text  size="sm">{user.email}</Text>
                        </Group>
                        <Group >
                            <Text size="xs">
                                {user.role}
                            </Text>
                            <Text size="xs" >
                                Created: {new Date(user.createdAt).toLocaleDateString()}
                            </Text>
                            <Text size="xs" >
                                Updated: {new Date(user.updatedAt).toLocaleDateString()}
                            </Text>
                        </Group>
                    </List.Item>
                ))}
            </List>
        </>
    );
}

export default App
