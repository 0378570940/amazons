import React from "react";
import "../Hero/Hero.css"
import HeroImg from "../../assets/hero.png"
import { RiShoppingBagFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"

function Hero() {
    return (
        <div className="container">
            <div className="h_sides">
                <span className="text1">Skin protection cream</span>
                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children
                        rejoiced</span>
                </div>
            </div>

            <div className="wrapper">
                <div className="blueCircle"></div>
                <img src={HeroImg} width={600}></img>
                <div className="cart2">
                    <RiShoppingBagFill />
                    <div className="sigup">
                        <span>Best Sigup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h_sides">
                <div className="traffic">
                    <span>1.5m</span>
                    <span>Monthly Tranffic</span>
                </div>
                <div className="customers">
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;