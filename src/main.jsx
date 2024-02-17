import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './error_page'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipes from './pages/Recipes.jsx';
import Recipe from './pages/Recipe.jsx';
import Contacts from './pages/Contacts.jsx';
import Auth from './pages/Auth.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Recipes",
    element: <Recipes/>,
  },
  {
    path: "/Recipes:name",
    element: <Recipes/>,
  },
  {
    path: "/recipe/:id",
    element: <Recipe/>,
  },
  {
    path: "/Contacts",
    element: <Contacts/>,
  },
  {
    path: "/Auth",
    element: <Auth />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
