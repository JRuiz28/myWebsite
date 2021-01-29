import React, {Fragment, useContext} from 'react'
import Container from '@material-ui/core/Container';
import Title from '../title';
import Information from './information';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { deepPurple } from '@material-ui/core/colors';
import themeContext from "../../context/themes/themeContext";
import '../../../src/style/letter.css';

const DivExperience = styled.div`
    margin: 50px 0px;
    border-radius: 16px;
    box-shadow: 2px 2px 10px 0.5px #613fa5;
    
    @media(min-width: 960px){
        width: 50%;
        margin:auto;
    }
`;


const DivTitle = styled.div`
    text-align: center;
    margin: 40px;
    padding: 20px 0;
`;

const AboutMe = () => {
    
    const themesContext = useContext(themeContext);
    const { checked } = themesContext;

    return ( 
        <Fragment>
            <Title 
                mensage1='Acerca de mi'
                mensage2=''
            />
            <Container fixed>
                <DivExperience>
                    <DivTitle>
                        <AccountCircleIcon  style={{ color: deepPurple["A400"], fontSize: 50 }}>
                        </AccountCircleIcon>

                        <h1 className={checked ? 'color-light' : 'color-dark-title'}>
                            Mi experiencia
                        </h1>
                        <br/>
                        <hr/>
                        
                        <Information checked={checked}/>
                    </DivTitle>
                </DivExperience>
            </Container>
        </Fragment>
     );
}
 
export default AboutMe;