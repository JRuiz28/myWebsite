import React, { useContext } from 'react';
import styled from 'styled-components';
import themeContext from "../../context/themes/themeContext";
import '../../../src/style/letter.css';

const DivPresent = styled.div`
    margin: auto;
    margin-top: 40px;
    width: 100%;
    height: 180px;
    display: flex;
    border-radius: 16px;
    box-shadow: 2px 2px 10px 0.5px #613fa5;

    @media(min-width: 960px){
        width: 70%;
        height: 240px;
    }
`;

const DivPhoto = styled.div`
    width: 33%;
    height: 100%;
    border-radius: 16px 0px 0px 16px;
    background-image: url(../../img/photo-me.jpg);
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;

    
    @media(min-width: 960px){
        width: 25%;
    }
`;

const DivP = styled.div`
    width: 60%;
    padding: 12% 4%;
`;

const P = styled.p`
    width: 100%;
    
    @media(min-width: 960px){
        font-size: 20px;
    }
`;

const CardPresentation = () => {
    
    const themesContext = useContext(themeContext);
    const { checked } = themesContext;

    return ( 
        <DivPresent>
            <DivPhoto></DivPhoto>
            <DivP>
                <P className={checked ? 'color-light' : 'color-dark'}>
                    Hola, mi nombre es Josué Ruiz, soy "<i>Tico</i>" (costarricense) y soy desarrollador web.
                </P>
            </DivP>
        </DivPresent>
     );
}
 
export default CardPresentation;