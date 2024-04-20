import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { useEffect, useState } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const heightToVisible = 250;
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        setIsVisible(scrollY > heightToVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Wrapper>
            {isVisible && (
                <div className='top-btn' onClick={goToTop}>
                    <IoIosArrowDropupCircle className='icon' size='3rem' color='#8982c8' />
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .top-btn {
        position: fixed;
        bottom: 7rem;
        right: 1.3rem;
        z-index: 999;
        display: flex;
        cursor: pointer;
    }

    .icon {
        animation: gototop 1s ease-in-out infinite alternate;
        transition: transform 0.5s ease-in-out;
    }

    @keyframes gototop {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-0.5rem);
        }
    }
`;

export default GoToTop;






// import React from 'react'
// import styled from 'styled-components';
// import { BsArrowUp, BsArrowUpCircle } from 'react-icons/bs';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const GoToTop = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const goToBtn = () => {
//         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//     };

//     const listenToScroll = () => {
//         let heightToHidden = 250;
//         const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

//         if (winScroll > heightToHidden) {
//             setIsVisible(true);
//         } else {
//             setIsVisible(false);
//         }

//     };

//     useEffect(() => {
//         window.addEventListener('scroll', listenToScroll);
//         return () => window.removeEventListener("scroll", listenToScroll);
//     }, []);

//     return (
//         <Wrapper>
//             {isVisible && (
//                 <div className='top-btn' onClick={goToBtn} >
//                     <BsArrowUp className='text-pink-600' size="1.9rem" />
//                 </div>
//             )}

//         </Wrapper>
//     );
// };

// const Wrapper = styled.section`
//     display:flex;
//     justify-content: center;
//     align-items: center;

//     .top-btn {
//         width: 2.3rem;
//         color: black;
//         position: fixed;
//         bottom: 7.8rem;
//         right: 2.3rem;
//         z-index: 999;
//         display: flex;
//         cursor: pointer;

//         &--icon {
//             animation: gototop 1.2s linear infinite alternate-reverse;
//         }
//         @keyframes gototop {
//             0% {
//                 transform: translateY(-0.5rem);
//             }
//             100% {
//                 transform: translateY(1rem);
//             }
//         }
//     }

//     `;

// export default GoToTop;



