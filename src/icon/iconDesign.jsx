import React from 'react'
import ComputerIcon from '@material-ui/icons/Computer';
import styled from 'styled-components';
import { lightBlue } from '@material-ui/core/colors';

const ContainerIcon = styled.div`
    width: 25px;
    padding: 4px;
    margin-right: 20px;
    background: #e1f5fe;
    border-radius: 6px;
    box-shadow: 1px 1px 6px#81d4fa;
`;


const IconDesign = () => {
    return ( 
        <ContainerIcon>
            <ComputerIcon style={{ color: lightBlue[700] }} ></ComputerIcon>
        </ContainerIcon>
     );
}
 
export default IconDesign;