import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Suggestions.scss'
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide from '../../../images/top_slide.svg'
import card from '../../../images/top_card.svg'

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const slide_img = [
    slide,
    slide,
    slide,
];

const Suggestions = () => {
    return (
        <div className="wrapper">
            <img  className="card" src={card} alt="card"/>
            <div className="limiter">
                <div className="navigation">
                    <span className="prev">&#60;</span>
                    <span className="next">&#62;</span>
                </div>
            </div>
            <Swiper
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                pagination
                className="mySwiper"
            >
                {slide_img.map((img, i) =>
                    <SwiperSlide key={i}>
                        <img src={img} alt="" />
                    </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default Suggestions