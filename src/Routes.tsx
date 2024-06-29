import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectBranches from "./pages/ProjectDetailSubPages/ProjectBranches";
import ProjectCommits from "./pages/ProjectDetailSubPages/ProjectCommits";
import ProjectRepo from "./pages/ProjectDetailSubPages/ProjectRepo";
import ProjectTechnologies from "./pages/ProjectDetailSubPages/ProjectTechnologies";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

const AdminPage = lazy(() => import('./pages/AdminPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile userName='nwamugo' />,
      },
      {
        path: 'projects',
        element: <Projects userName='nwamugo' />,
      },
      {
        path: 'projects/:name',
        element: <ProjectDetail />,
        children: [
          {
            index: true,
            element: <ProjectRepo userName='nwamugo' />
          },
          {
            path: 'technologies',
            element: <ProjectTechnologies userName='nwamugo' />,
          },
          {
            path: 'commits',
            element: <ProjectCommits userName='nwamugo' />,
          },
          {
            path: 'branches',
            element: <ProjectBranches userName='nwamugo' />,
          }
        ]
      },
      {
        path: 'admin',
        element: (
          <Suspense
            fallback={
              <div>Loading...</div>
            }
          >
            <AdminPage />
          </Suspense>
        )
      }
    ]
  }
]);

export function Routes() {
  return <RouterProvider router={router} />
}