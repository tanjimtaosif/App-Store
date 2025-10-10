import Root from "../pages/Root.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import InstalledApps from "../pages/InstalledApps.jsx";
import AllApps from "../pages/AllApps.jsx";
import AppDetails from "../pages/AppDetails.jsx";
import NotFoundAppPage from "../pages/NotFoundAppPage.jsx";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch("/appsData.json");
                    return res.json();
                },
                element: <Home />,
            },
            {
                path: "/all-apps",
                loader: async () => {
                    const res = await fetch("/appsData.json");
                    return res.json();
                },
                element: <AllApps />,
            },
            {
                path: "/installed-apps",
                loader: async () => {
                    const res = await fetch("/appsData.json");
                    return res.json();
                },
                element: <InstalledApps />,
            },
            {
                path: "/appDetails/:id",
                loader: async ({ params }) => {
                    const res = await fetch("/appsData.json");
                    const data = await res.json();

                    const app = data.find((item) => item.id === parseInt(params.id));

                    if (!app) {
                        throw new Response("App Not Found", {
                            status: 404,
                            statusText: "App Not Found",
                        });
                    }

                    return app;
                },
                element: <AppDetails />,
                errorElement: <NotFoundAppPage />,
            },
        ],
    },
]);
