import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Page from './page/Dimensions/Page.tsx';
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path : "/dimension/:id/:name",
        element : <Page />
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(



    <RouterProvider router={router} />
 

)
