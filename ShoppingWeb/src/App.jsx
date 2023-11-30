import React from "react";
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import MyOrders from './pages/myOrders/MyOrders';
import Message from './pages/massage/Message';
import Add from './pages/add/Add';
import Messages from "./pages/massages/Messages";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />,
        },

        {
          path:"/myOrders",
          element:<MyOrders />,
        },

     
        {
          path:"/add",
          element:<Add />,
        },

        {
          path:"/messages",
          element:<Messages />,
        },

        {
          path:"/message/:id",
          element:<Message />,
        },

      ]
     

    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;