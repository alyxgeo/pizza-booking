import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from '../src/features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
import AppLayout from "./ui/AppLayout";
import Error from './ui/Error'

import { loader as menuLoader } from '../src/features/menu/Menu'
import { loader as orderLoader } from './features/order/Order'

import { action as createOrderAction } from './features/order/CreateOrder'

import { action as updateOrderAction } from './features/order/UpdateOrder'

const router = createBrowserRouter([

  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [

      { path: '/', element: <Home /> },

      { path: '/menu', element: <Menu />, loader: menuLoader, errorElement: <Error />, },

      { path: '/cart', element: <Cart /> },

      { path: '/order/new', element: <CreateOrder />, action: createOrderAction },

      {
        path: '/order/:orderId',
        element: <Order />, loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction
      },

    ]

  }

])




const App = () => {
  return <RouterProvider router={router} />
}




export default App