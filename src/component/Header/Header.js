import React from 'react';
import "../Header/Header.css"
import Logo from '../../assets/logo.png'
import { BsMinecartLoaded } from 'react-icons/bs'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from '../../Commons/Router';

function Header() {
    return (
        <div className="containers">
            <div className="logo">
                <img src={Logo}></img>
                <span>amazon</span>
            </div>
            <div className="right">
                <div className="menu">
                    <ul className="menu">
                        <BrowserRouter>
                            <Routes>
                                {
                                    Router.map((item) => {
                                        return (
                                            <Route path={item.path} element={item.element} key={item.name}></Route>
                                        )
                                    })
                                }
                            </Routes>
                        </BrowserRouter>
                    </ul>
                </div>
                <input type="search" className="search"></input>
                <BsMinecartLoaded className='cart'></BsMinecartLoaded>
            </div>
        </div >
    )
}

export default Header;