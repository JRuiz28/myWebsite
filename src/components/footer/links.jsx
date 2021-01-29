import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const DivLink = styled.div`
    display: flex;
    flex-direction: column;
`;

const LinkFooter = ({checked}) => {
    
    const up = () => {
        window.scrollTo(0, 0);
    }

    return ( 
        <DivLink>
            <Link onClick={() => up()} className='link_footer' to='/home' >    
                <h3 
                    className={checked ? 'color-light-footer-link' : 'color-dark-footer-link'}
                    
                >Inicio</h3>
            </Link>
            <Link onClick={() => up()} className='link_footer' to='/about-me'> 
                <h3 
                    className={checked ? 'color-light-footer-link' : 'color-dark-footer-link'}
                    
                >Acerca de mí</h3>
            </Link>
            <Link onClick={() => up()} className='link_footer' to='/skill' >   
                <h3 
                    className={checked ? 'color-light-footer-link' : 'color-dark-footer-link'}
                    
                >Habilidades</h3>
            </Link>
            <Link onClick={() => up()} className='link_footer' to='/jobs' >    
                <h3 
                    className={checked ? 'color-light-footer-link' : 'color-dark-footer-link'}
                    
                >Proyectos</h3>
            </Link>
        </DivLink>
     );
}
 
export default LinkFooter;