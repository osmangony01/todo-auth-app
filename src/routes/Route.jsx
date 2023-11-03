import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <SignIn></SignIn>
            },
            {
                path: "/sign-up",
                element:<SignUp></SignUp>
            }
        ]
    }
]);


export default router;