import React from "react";
import "../Sider/Sider.css"
import Img1 from "../../assets/img1.png"
import Img2 from "../../assets/img2.png"
import Img3 from "../../assets/img3.png"
import Img4 from "../../assets/img4.png"
import Img5 from "../../assets/img5.png"
import Img6 from "../../assets/img6.png"
import Img7 from "../../assets/img7.png"
import Img8 from "../../assets/img8.png"
import Img9 from "../../assets/img9.png"


function Sider() {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <div class="row d-flex justify-content-evenly">

                        <div class="col-sm-3 mb-3 mb-sm-0 ">
                            <div class="card d-flex flex-row ">
                                <div class="">
                                    <div class="card-body">
                                        <h1 class="card-title">SKIN</h1>
                                        <p class="card-text">Super Cove</p>
                                        <h1>25$</h1>
                                        <a href="#" class="btn btn-primary">Shop Now</a>
                                    </div>
                                </div>
                                <div class="">
                                    <img
                                        src={Img1}
                                        class="transform d-block position-absolute top-40 start-45 w-50"
                                        width={150} height={250}
                                        alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card d-flex flex-row">
                                <div class="">
                                    <div class="card-body">
                                        <h1 class="card-title">SKIN</h1>
                                        <p class="card-text">Super Cove</p>
                                        <h1>25$</h1>
                                        <a href="#" class="btn btn-primary">Shop Now</a>
                                    </div>
                                </div>
                                <div class="">
                                    <img src={Img2} width={150} height={250}
                                        class="transform d-block position-absolute top-40 start-45  w-15" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card d-flex flex-row">
                                <div class="">
                                    <div class="card-body">
                                        <h1 class="card-title">SKIN</h1>
                                        <p class="card-text">Super Cove</p>
                                        <h1>25$</h1>
                                        <a href="#" class="btn btn-primary">Shop Now</a>
                                    </div>
                                </div>
                                <div class="">
                                    <img src={Img3} width={150} height={250}
                                        class="transform d-block position-absolute top-40 start-45  w-15" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="carousel-item" data-bs-interval="1000">
                    <img src={Img4} class="d-block w-25" alt="..." />
                    <img src={Img5} class="d-block w-25" alt="..." />
                    <img src={Img6} class="d-block w-25" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Img7} class="d-block w-25" alt="..." />
                    <img src={Img8} class="d-block w-25" alt="..." />
                    <img src={Img9} class="d-block w-25" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Sider