import React from 'react'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import styled from 'styled-components';
import { yellow } from '@material-ui/core/colors';

const ContainerIcon = styled.div`
    width: 25px;
    padding: 4px;
    margin-right: 20px;
    background: #fffde7;
    border-radius: 6px;
    box-shadow: 1px 1px 6px#ffeb3b;
`;


const IconLogro = () => {
    return ( 
        <ContainerIcon>
            <DoneAllIcon style={{ color: yellow[700] }} ></DoneAllIcon>
        </ContainerIcon>
     );
}
 
export default IconLogro;