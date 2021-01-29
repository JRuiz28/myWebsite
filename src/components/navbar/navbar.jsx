import React from 'react';
import Burger from './burger';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    height: 78%;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    background: #5301EB;
    
    border-color: 2px solid #5301EB;
    color: white;

    .logo{
        padding: 25px;
    }
`

const Navbar = ({PurpleSwitch, darkSwitch, handleChange}) => {
    return ( 
        <Nav>
            <div className="logo">
                <Link className='nav_link' to='/home' >Josué Ruiz</Link>
            </div>
            <Burger
                PurpleSwitch={PurpleSwitch}
                darkSwitch={darkSwitch}
                handleChange={handleChange}
            />
        </Nav>
     );
}
 
export default Navbar;