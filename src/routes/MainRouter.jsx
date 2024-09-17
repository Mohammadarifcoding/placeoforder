import SignInPage from "@/pages/signInPage/SignInPage";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "@/pages/signUpPage/SignUpPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  }
]);

export default router;