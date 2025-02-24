import { ReactElement } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Button, Title, Text, Container } from '@mantine/core';

function AuthErrorFallback({ error, resetErrorBoundary }: FallbackProps): ReactElement {
    return (
        <Container my="xl">
            <Title order={2}>
                Authentication Error
            </Title>
            <Text mb="md">
                {error.message}
            </Text>
            <Button variant="outline" onClick={resetErrorBoundary}>
                Login again
            </Button>
        </Container>
    );
}

export default AuthErrorFallback;