import {
    AppShell,
    Group,
    Button,
    Image,
    Select,
    Container,
    ActionIcon,
} from '@mantine/core';
import {
    Github,
    Linkedin,
    Globe,
    Mail,
    Facebook
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 60;

const AuthLayout = () => {
    const [language, setLanguage] = useState('en');
    const navigate = useNavigate();

    const handleTryFree = () => {
        navigate('/auth/register');
    };

    const handleLanguageChange = (value: string | null) => {
        if (value) {
            setLanguage(value);
        }
    };

    const socials = [
        { icon: Github, link: '#github', label: 'Github' },
        { icon: Linkedin, link: '#linkedin', label: 'LinkedIn' },
        { icon: Facebook, link: '#facebook', label: 'Facebook' },
        { icon: Mail, link: 'mailto:contact@example.com', label: 'Email' }
    ];

    return (
        <AppShell
            bg="gray.1"
            padding="md"
            header={{ height: HEADER_HEIGHT }}
            footer={{ height: FOOTER_HEIGHT }}
        >
            {/*<AppShell.Header>*/}
            {/*    <Container size="lg">*/}
            {/*        <Group justify="space-between" h={HEADER_HEIGHT}>*/}
            {/*            <Group>*/}
            {/*                <Image*/}
            {/*                    src="/logo.svg"*/}
            {/*                    alt="Company Logo"*/}
            {/*                    width={120}*/}
            {/*                    fallbackSrc="https://placehold.co/120x40?text=LOGO"*/}
            {/*                />*/}
            {/*            </Group>*/}

            {/*            <Group>*/}
            {/*                <Button*/}
            {/*                    variant="gradient"*/}
            {/*                    gradient={{ from: 'blue', to: 'cyan' }}*/}
            {/*                    onClick={handleTryFree}*/}
            {/*                >*/}
            {/*                    Try Free*/}
            {/*                </Button>*/}
            {/*            </Group>*/}
            {/*        </Group>*/}
            {/*    </Container>*/}
            {/*</AppShell.Header>*/}

            <AppShell.Main>
                <Container size="md" py="xl">
                    <Outlet />
                </Container>
            </AppShell.Main>

            <AppShell.Footer>
                <Container size="lg">
                    <Group justify="space-between" h={FOOTER_HEIGHT}>
                        <Group gap="xs" justify="center" wrap="nowrap">
                            {socials.map((social, index) => (
                                <ActionIcon
                                    key={index}
                                    size="lg"
                                    color="gray"
                                    variant="subtle"
                                    component="a"
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <social.icon
                                        size={18}
                                        strokeWidth={1.5}
                                    />
                                </ActionIcon>
                            ))}
                        </Group>

                        <Group gap="xs">
                            <Globe size={16} strokeWidth={1.5} />
                            <Select
                                size="xs"
                                value={language}
                                onChange={handleLanguageChange}
                                data={[
                                    { value: 'en', label: 'English' },
                                    { value: 'es', label: 'Español' },
                                    { value: 'fr', label: 'Français' },
                                    { value: 'de', label: 'Deutsch' },
                                    { value: 'ar', label: 'العربية' }
                                ]}
                                styles={{
                                    input: {
                                        minHeight: 'unset',
                                    }
                                }}
                            />
                        </Group>
                    </Group>
                </Container>
            </AppShell.Footer>
        </AppShell>
    );
};

export default AuthLayout;