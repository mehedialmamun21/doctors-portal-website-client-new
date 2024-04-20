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
                    <BsArrowUp className='text-pink-600' size="1.9rem" />
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
        width: 2.3rem;
        color: black;
        position: fixed;
        bottom: 7.8rem;
        right: 2.3rem;
        z-index: 999;
        display: flex;
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