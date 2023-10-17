import React from 'react'
import styled from 'styled-components';
import { BsArrowUp, BsArrowUpCircle } from 'react-icons/bs';
import { useEffect } from 'react';
import { useState } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <Wrapper>
            {isVisible && (
                <div className='top-btn' onClick={goToBtn} >
                    <BsArrowUp className='' size="1.2rem" />
                </div>
            )}

        </Wrapper>
    );
};

const Wrapper = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;

    .top-btn {
        font-size: 2.4 rem;
        width: 2.3rem;
        height: 2.1rem;
        color: black;
        
        background-color: white;
        border-radius: 10%;
        position: fixed;
        bottom: 8rem;
        right: 2.7rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &--icon {
            animation: gototop 1.2s linear infinite alternate-reverse;
        }
        @keyframes gototop {
            0% {
                transform: translateY(-0.5rem);
            }
            100% {
                transform: translateY(1rem);
            }
        }
    }

    `;

export default GoToTop;