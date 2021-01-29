import React, {useContext}  from 'react'
import styled from 'styled-components';
import '../style/title.css';
import themeContext from "../context/themes/themeContext";
import Container from '@material-ui/core/Container';

const DIV = styled.div`
    width: 100%;
    height: auto;
    padding-top: 30px;
    background: #5301EB;
`;

const Message = styled.h1`
    padding: 0 25px;
    font-size: 50px;
    font-weight: bold;
    color: white;
`;

const Title = ({mensage1, mensage2}) => {
    
    const themesContext = useContext(themeContext);
    const { checked } = themesContext;

    return ( 
        
        <DIV>
            <Container fixed>
                <Message>{mensage1}</Message>
                <Message>{mensage2}</Message>
                <br/>
            </Container>
            <div className="custom-shape-divider-bottom-1610860262">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={checked ? 'shape-fill-dark' : 'shape-fill-light'}></path>
                </svg>
            </div>
        </DIV>
     );
}
 
export default Title;