import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";

/* element은 React Router에서 사용되는 속성으로, 해당 경로(path)에 대한 컴포넌트를 지정하는 역할 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:videoId",
        element: <VideoDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
