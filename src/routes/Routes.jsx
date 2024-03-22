import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Blogs from "../Components/Blogs";
import MainLayout from "../Layouts/MainLayout";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";
import Content from "../Components/Content";
import Author from "../Components/Author";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: "/blog/:id",
          element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,   // aikhane true dewa mane initialy Blog component a thakle ai Content page ta dekhabe. Abar aikhane path: 'content' likhlew hoto.
                element: <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>
        }
      ]
    },
  
  ]);

  export default router;