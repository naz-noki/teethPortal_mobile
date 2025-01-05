import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main/Main";
import { NAVIGATION_LINKS } from "./constants/navigation";
import Faq from "./store/slices/pages/Faq/Faq";
import Favorite from "./store/slices/pages/Favorite/Favorite";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: NAVIGATION_LINKS.Welcome,
                element: <Main />,
            },
            {
                path: NAVIGATION_LINKS.FAQ,
                element: <Faq />,
            },
            {
                path: NAVIGATION_LINKS.Favorite,
                element: <Favorite />,
            },
        ],
    },
]);

export default router;
