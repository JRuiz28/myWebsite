import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li{
        padding: 25px 10px;
    }
    .switch{
        padding: 18px 30px;
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: #25006B;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)' };
        top: 0;
        right:0px;
        height: 100vh;
        width: 280px;
        padding-top: 3.5rem;
        padding-left: 10px;
        transition: transform 0.3 ease-in-out;
        z-index:18;

        li { 
            color: white;
            position: relative;
        }
    }
`

const RightBar = ({PurpleSwitch, darkSwitch, handleChange, open, setOpen}) => {
    return ( 
        <Ul open = {open}>
                
              <li> <Link className='nav_link' to="/about-me" onClick={() => setOpen(false)}>Acerca de mi</Link> </li>
              <li> <Link className='nav_link' to="/skill"    onClick={() => setOpen(false)}>Habilidades</Link> </li>
              <li> <Link className='nav_link' to="/jobs"     onClick={() => setOpen(false)}>Proyectos</Link> </li>
                <div className='switch'>
                    <PurpleSwitch 
                        checked={darkSwitch.checkedDark}
                        onChange={handleChange}
                        name="checkedDark"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    /> <span className='nav_link_switch'>Modo oscuro</span>
                </div>
            </Ul>
     );
}
 
export default RightBar;