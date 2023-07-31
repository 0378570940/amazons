import React from 'react'
import Header from '../component/Header/Header'
import Hero from "../component/Hero/Hero";
import Sider from "../component/Sider/Sider";
import Virtual from "../component/Virtual/Virtuaal";
import Products from "../component/Products/Products";
import Testimonials from "../component/Testimonials/Testimonials";

const routes = [
    {
        path: "",
        element: <Header />,
        name: "Header"
    },
    {
        path: "/Hero",
        element: <Hero />,
        name: "Hero"
    },
    {
        path: "/Sider",
        element: <Sider />,
        name: "Sider"
    },
    {
        path: "/Virtual",
        element: <Virtual />,
        name: "Virtual"
    },
    {
        path: "/Products",
        element: <Products />,
        name: "Products"
    },
    {
        path: "/Testimonials",
        element: <Testimonials />,
        name: "Testimonials"
    }
]

export default routes