import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container';
import Title from '../title';
import IconStar from '../../icon/iconStar';
import styled from 'styled-components';
import CardPresentation from './cartPresentation';
import Links from '../link';

const DivIcon = styled.div`
    text-align: center;
    margin-top: 25px;
`;

const DivLink = styled.div`
    width: 100%;
    margin-top: 25px;
    margin-bottom: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
`;


const Home = () => {
    return ( 
        <Fragment>
            <Title 
                mensage1='¡Hola!'
                mensage2='Bienvenido a mi web :)'
            />
            <Container fixed>
                <DivIcon>
                    <IconStar />
                </DivIcon>
                <CardPresentation />

                <DivLink>
                    <Links size={50} />
                </DivLink>
                
            </Container>
        </Fragment>
     );
}
 
export default Home;