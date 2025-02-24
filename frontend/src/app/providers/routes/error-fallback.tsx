import { ReactElement } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Button, Title, Text, Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { RoutePaths } from './route-paths.ts'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps): ReactElement {
    const navigate = useNavigate();

    return (
        <Container my="xl">
            <Title order={2}>
                Something went wrong
            </Title>
            <Text mb="md">
                {error.message}
            </Text>
            <Button
                variant="outline"
                onClick={() => {
                    navigate(RoutePaths.ROOT);
                    resetErrorBoundary?.();
                }}
            >
                Go to Home
            </Button>
        </Container>
    );
}

export default ErrorFallback;