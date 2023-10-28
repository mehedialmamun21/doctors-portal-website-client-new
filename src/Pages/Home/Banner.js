import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/images/01.webp";
import img2 from "../../assets/images/02.webp";
import img3 from "../../assets/images/03.webp";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Create an interval to change the current slide every 5 seconds
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % 3);
        }, 6000);

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide]);

    return (
        <center>
            <Carousel selectedItem={currentSlide}>
                <div>
                    <img src={img1} alt='img' />
                </div>
                <div>
                    <img src={img2} alt='img' />
                </div>
                <div>
                    <img src={img3} alt='img' />
                </div>
            </Carousel>
        </center>
    );
};

export default Banner;
