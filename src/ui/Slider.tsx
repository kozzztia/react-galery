import styles from "./gameDescription.module.css";
import {screenshotsTypes, sliderPropsInterface} from "../types/types";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider:React.FC<sliderPropsInterface> = ({className , screenshots})=>{
    return (
    <Swiper className={className}

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    >
        {
            screenshots.map( (item :screenshotsTypes) =>
                     <SwiperSlide key={item.id} className={styles.sliderItem}>
                         <img src={item.image} alt=""/>
                    </SwiperSlide>)
        }
        ...
    </Swiper>



    )
}

export default Slider;

