import {useState} from 'react';
import { Outlet } from "react-router-dom";
import { AppShell } from '@mantine/core';
import { AppHeader, Sidebar, ModalManager } from '../components';

function MainLayout() {
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
                <AppHeader />
            </AppShell.Header>

            <AppShell.Navbar>
                <Sidebar
                    isCollapsed={isSidebarCollapsed}
                    setIsCollapsed={setIsSidebarCollapsed}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <ModalManager />
        </AppShell>
    );
}

export default MainLayout;