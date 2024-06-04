import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Projects/RouterDom/Layout.jsx'
import Home from './Projects/RouterDom/Home.jsx'
import About from './Projects/RouterDom/About.jsx'



const router=createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     </Route>
    )
  )
  
  

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
