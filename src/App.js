
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import ErrorPage from './components/ErrorPage';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Project from "./components/Projects/project";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contacts',
    element: <Contacts />,
    errorElement: <ErrorPage />
  },
  {
    path: '/projects',
    element: <Project />,
    errorElement: <ErrorPage />
  }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
