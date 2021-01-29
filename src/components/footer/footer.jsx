import React, { useContext } from 'react';
import LinkFooter from './links';
import styled from 'styled-components';
import themeContext from '../../context/themes/themeContext';

import Container from '@material-ui/core/Container';
import IconDrag from '../../icon/iconDrag';
import Links from '../link';

import '../../style/footer.css';
import '../../style/letter.css';


const DivFooter = styled.div`
    width: 96%;
    padding: 2%;
    height: auto;
    position: relative;
`;

const DivData = styled.div`
    margin-bottom: 50px;
`;

const DivLinkIcon = styled.div`
    display: flex;
    margin-top: 5px;
    margin-bottom: 50px;
`;

const DivYear = styled.div`
    padding-top: 12px;
    width: 100%;
    text-align: center;
`;


const Footer = () => {
    
  const themesContext = useContext(themeContext);
  const { checked } = themesContext;

  const date = new Date();

    return ( 
        <DivFooter className={checked ? 'background-dark' : 'background-light'}>
            <IconDrag checked={checked}/>
            
            <Container fixed className={checked ? 'color-light' : 'color-dark-footer'}>
                <DivData>
                    <h3>Josué Ruiz.</h3>
                    <h3>Puntarenas, Costa Rica.</h3>
                </DivData>

                <h2>Contactos</h2>
                <DivLinkIcon>
                    <Links size={45} />
                </DivLinkIcon>

                <LinkFooter checked={checked}/>

                <DivYear>
                    <h6>{date.getFullYear()}</h6>
                </DivYear>
            </Container>
        </DivFooter>
     );
}
 
export default Footer;