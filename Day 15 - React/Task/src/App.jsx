import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./screens/Home";
import About from "./screens/About";
import AddUserPage from "./screens/AddUser";
import Contact from "./screens/Contact";
import Details from "./screens/Details";
import Users from "./components/Users";  // Import Users component
import UsersContextProvider from "./contexts/usersContextProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Users /> },  // Users component will render only on the home page
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "users/add", element: <AddUserPage /> },
        { path: "users/:userId", element: <Details /> },
      ],
    },
  ]);

  return (
    <>
      <UsersContextProvider>
        <RouterProvider router={router} />
      </UsersContextProvider>
    </>
  );
}

export default App;
