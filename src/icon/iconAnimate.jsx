import React from 'react'
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import styled from 'styled-components';
import { red } from '@material-ui/core/colors';

const ContainerIcon = styled.div`
    width: 25px;
    padding: 4px;
    margin-right: 20px;
    background: #ffebee;
    border-radius: 6px;
    box-shadow: 1px 1px 6px#ef9a9a;
`;


const IconAnimate = () => {
    return ( 
        <ContainerIcon>
            <FlipToFrontIcon style={{ color: red[700] }} ></FlipToFrontIcon>
        </ContainerIcon>
     );
}
 
export default IconAnimate;