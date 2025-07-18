import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDropup } from 'react-icons/io';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const heightToVisible = 250;
        setIsVisible(window.scrollY > heightToVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Wrapper>
            {isVisible && (
                <button className="top-btn" onClick={goToTop}>
                    <IoIosArrowDropup className="icon" />
                </button>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .top-btn {
    position: fixed;
    bottom: 6rem;
    right: 2.1rem;
    z-index: 999;
    background-color: #1a1a1a; /* Professional dark black */
    color: #ffffff;
    border: 2px solid #ffffff; /* White border */
    border-radius: 8px;
    padding: 0.6rem 0.75rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .top-btn:hover {
    background-color: #4338ca; /* Darker indigo on hover */
    border-color: #ffffff; /* Keep border white on hover */
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  .icon {
    font-size: 1.5rem;
    pointer-events: none;
  }
`;

export default GoToTop;



