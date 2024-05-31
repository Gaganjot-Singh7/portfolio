import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Contact from './comp/Contact.jsx';
import About from './comp/About.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './comp/Error.jsx';
import Portfolio from './comp/Portfolio.jsx';
import Home from './comp/Home.jsx';
import Knowledge from './comp/Knowledge.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index:true,
    element:<Home/>
  },{
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  }, {
    path: "*",
    element: <Error />
  },
  {
    path: 'portfolio',
    element: <Portfolio />
  },
{
  path:"knowledge",
  element:<Knowledge/>
}]
},])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
