import React, { useState } from "react";
import "../Products/Product.css"
import Plane from "../../assets/plane.png"
import { ProductsData } from "../../data/products"

function Products(props) {
    const [MenuProducts, setMenuProducts] = useState(ProductsData)
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((prduct) => prduct.type === type))
    }
    return (
        <div className="containerss">
            <img src={Plane} alt="" />
            <h1>Out Featured Products</h1>
            <div className="products">
                <ul className="menus">
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Skin Care</li>
                    <li onClick={() => filter("conditioner")}>Conditioners</li>
                    <li onClick={() => filter("foundation")}>Foundations</li>
                </ul>

                <div className="list">
                    {
                        MenuProducts.map((product, i) => (
                            <div className="product">
                                <div className="left-s">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}$</span>
                                    <div>Show Now</div>
                                </div>
                                <img src={product.img} alt="" className="img-p" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Products