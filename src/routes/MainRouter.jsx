import SignInPage from "@/pages/signInPage/SignInPage";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "@/pages/signUpPage/SignUpPage";
import ResetPassword from "@/pages/resetPassword/ResetPassword";


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
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;