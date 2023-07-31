import React from "react";
import "../Testimonials/Testimonials.css"
import Hero from "../../assets/testimonialHero.png"
import { TestimonialsData } from "../../data/testimonials"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

function Testimonials(props) {
    return (
        <div className="testimonials">
            <div className="wrappers">
                <div className="containerr">
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children
                        rejoiced
                    </span>
                </div>
                <img src={Hero} alt="" />
                <div className="containersss">
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>

            <div className="reviews">Reviews</div>

            <div className="carousal">
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={10}
                    className="tCarousel"
                >
                    {
                        TestimonialsData.map((testimonials, i) => (
                            <SwiperSlide>
                                <div className="testimonial">
                                    <img src={testimonials.image} alt="" />
                                    <span>{testimonials.comment}</span>
                                    <hr />
                                    <span>{testimonials.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
export default Testimonials