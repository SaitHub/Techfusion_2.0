import './App.css'
import EventPage from './pages/EventPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Register from './pages/Register'
function App() {
  const router = createBrowserRouter([
    {element: <Home />, path: "/"},
    {element: <EventPage />, path: "/event/:id"},
    {element:<Register/>,path:"/register"}
  ]);
  return (
   <>
    <RouterProvider router={router} />;
   </>
  )
}

export default App
