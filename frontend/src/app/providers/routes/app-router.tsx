import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense, lazy } from "react";
import NotFound from "../../not-found.tsx";
import Loading from "../../loading.tsx";

import { RoutePaths } from "./route-paths.ts";
import ErrorFallback from './error-fallback'

/** Lazy Load Layouts */
// const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const MainLayout = lazy(() => import("../../../shared/layouts/main-layout.tsx"));
const AuthLayout = lazy(() => import("../../../shared/layouts/auth-layout.tsx"));

/** Lazy Load Pages */
const LoginPage = lazy(() => import("~modules/users/pages/login-page.tsx"));
const Leads = lazy(() => import("~modules/leads/pages/leads.tsx"));

/** Public Routes */
const authRoutes = {
    path: RoutePaths.ROOT,
    element: (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading />}>
                <AuthLayout />
            </Suspense>
        </ErrorBoundary>
    ),
    children: [
        { path: RoutePaths.LOGIN, element: <LoginPage /> },
        { index: true, element: <Navigate to="/auth/login" replace /> },
    ],
};

/** Protected Routes */
const protectedRoutes = {
    path: RoutePaths.ROOT,
    element: (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading />}>
                <MainLayout />
            </Suspense>
        </ErrorBoundary>
    ),
    children: [
        { path: RoutePaths.LEADS, element: <Leads /> },
        { index: true, element: <Navigate to="/leads" replace /> },
    ],
};

/** Not Found Route */
const notFoundRoute = { path: "*", element: <NotFound /> };

/** Create and Export Router */
const router = createBrowserRouter([authRoutes, protectedRoutes, notFoundRoute]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;