import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Nav from "./components/nav/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/NotFound";

function App() {

  const router = createBrowserRouter([
    {
      path: 'Portfolio', element: <Nav />, errorElement: <NotFound/> , children: [
        {
          index: true, element: <Main />
        },
        {
          path: 'resume', element: <Resume />
        },
        {
          path: 'projects', element: <Projects />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} basename="Portfolio"  />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
