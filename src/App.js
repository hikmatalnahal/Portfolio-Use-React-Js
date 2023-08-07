import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Index from "./pages/index"
import About from "./pages/about"
import Conact from "./pages/conact-us"
import Projects from "./pages/projects"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/conact-us',
    element: <Conact />
  },
  {
    path: '/projects',
    element: <Projects />
  },

])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
