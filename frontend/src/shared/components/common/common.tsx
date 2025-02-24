import React, { useState } from 'react';
import { AppShell } from '@mantine/core';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import EmptyState from './components/EmptyState';

function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <AppShell
            header={{ height: 64 }}
            navbar={{
                width: isSidebarCollapsed ? 60 : 240,
                breakpoint: 'sm'
            }}
            padding="md"
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>

            <AppShell.Navbar>
                <Sidebar
                    isCollapsed={isSidebarCollapsed}
                    setIsCollapsed={setIsSidebarCollapsed}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                <EmptyState />
            </AppShell.Main>
        </AppShell>
    );
}

export default App;