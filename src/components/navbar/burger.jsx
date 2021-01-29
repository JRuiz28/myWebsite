import React, { useState } from 'react';
import RightBar from './rightBar';
import styled from 'styled-components';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position:  ${({open}) => open ? 'fixed' : 'absolute'};;
    top: 15px;
    right: 20px;
    display: flex;
    z-index: 20;
    display: none;

    @media(max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }


    div{
        width: 2rem;
        height: 0.25rem;
        background-color: white;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2){
            transform: ${({open}) => open ? 'traslateX(100%)' : 'traslateX(100%)'};
            opacity: ${({open}) => open ? 0 : 1};
        }
        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = ({PurpleSwitch, darkSwitch, handleChange}) => {
    const [open, setOpen] = useState(false)
    return ( 
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightBar
                PurpleSwitch={PurpleSwitch}
                darkSwitch={darkSwitch}
                handleChange={handleChange}
                open={open}
                setOpen={setOpen}
            />
        </>
     );
}
 
export default Burger;