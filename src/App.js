import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  { path: "/signin", element: <SignIn /> },
  { path: "/account", element: <Account /> },
]);

function App() {
  return (
    <AuthContextProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
