import MainLayout from 'layouts/MainLayout';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import MainLayoutProvider from 'providers/MainLayoutProvider';
import App from 'App';
import { Suspense, lazy } from 'react';
import PhoenixLoader from 'components/common/PhoenixLoader';

// Lazy load: 페이지 2개만
const Members = lazy(() => import('pages/apps/organization/Members'));
const Settings = lazy(() => import('pages/apps/organization/Settings'));

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <MainLayoutProvider>
            <MainLayout />
          </MainLayoutProvider>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/apps/organization/members" replace />
          },
          {
            path: '/apps/organization',
            children: [
              {
                path: 'members',
                element: (
                  <Suspense fallback={<PhoenixLoader />}>
                    <Members />
                  </Suspense>
                )
              },
              {
                path: 'settings',
                element: (
                  <Suspense fallback={<PhoenixLoader />}>
                    <Settings />
                  </Suspense>
                )
              }
            ]
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to="/apps/organization/members" replace />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASENAME || '/'
});

export default routes;
