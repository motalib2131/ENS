import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import O2C from '../pages/O2C'
import Products from '../pages/Products'
import Industries from '../pages/Industries'
import Resources from '../pages/Resources'
import About from '../pages/About'
import GetStarted from '../pages/GetStarted'
import NotFound from '../pages/404'
import Login from '../pages/Login'
// import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header';

const Index = () => {

  const route = [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/o2c",
      element: <O2C />,
    },
    {
      path: "/product",
      element: <Products/>,
    },
    {
      path: "/industries",
      element: <Industries />,
    },
    {
      path: "/resources",
      element: <Resources/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/getstarted",
      element: <GetStarted/>,
    },
    {
      path: "/authentication",
      element: <Login/>,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          {route.map((route, i) => (
            <Route key={i} exact path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}


export default Index