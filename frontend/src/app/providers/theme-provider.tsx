import '@mantine/core/styles.css';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { useState } from 'react';

import { lightTheme, darkTheme } from '../../styles/theme'



export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<MantineThemeOverride>(darkTheme);

    const toggleTheme = () => {
        setTheme(current => current === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <MantineProvider
            theme={theme}
        >
            {children}
        </MantineProvider>
    );
}