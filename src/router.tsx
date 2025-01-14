import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Main from "@/pages/Main/Main";
import { getNavigationLink, NAVIGATION_LINKS } from "@/constants/navigation";
import Favorite from "@/pages/Favorite/Favorite";

const router = createBrowserRouter([
    {
        path: NAVIGATION_LINKS.DefaultURI,
        element: <App />,
        children: [
            {
                path: getNavigationLink(NAVIGATION_LINKS.Welcome),
                element: <Main />,
            },
            // {
            //     path: getNavigationLink(NAVIGATION_LINKS.FAQ),
            //     element: <Faq />,
            // },
            {
                path: getNavigationLink(NAVIGATION_LINKS.Favorite),
                element: <Favorite />,
            },
        ],
    },
]);

export default router;
