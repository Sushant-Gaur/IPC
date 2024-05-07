import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./components/Login/LogIn";
import SignUp from "./components/Login/SignUp.jsx";
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import FreeCourse from "./components/Free-course-section/FreeCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/portfolio",
      //   element: <Portfolio />,
      // },
      // {
      //   path: "/blogs",
      //   element: <Blogs />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/colleges",
    element: <Courses />,
  },
  {
    path: "/courses",
    element: <FreeCourse />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
