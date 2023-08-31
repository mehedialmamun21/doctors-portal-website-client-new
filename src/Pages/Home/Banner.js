import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/images/01.webp";
import img2 from "../../assets/images/02.webp";
import img3 from "../../assets/images/03.webp";
import img4 from "../../assets/images/04.webp";
import img5 from "../../assets/images/05.webp";
import img6 from "../../assets/images/06.webp";

const Banner = () => {

    return (

        <Carousel>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>

    );
};

export default Banner;