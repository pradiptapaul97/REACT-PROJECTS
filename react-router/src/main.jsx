import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { getGithubData } from './components/Github/Github.jsx';

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {
//         path:"/",
//         element: <Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element: <Contact/>
//       }
//     ]
//     // loader: loadRootData,
//   },
// ]);

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="user/:id" element={<User/>}></Route>
      <Route 
      loader={getGithubData}
        path="github" 
        element={<Github/>}
      ></Route>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
