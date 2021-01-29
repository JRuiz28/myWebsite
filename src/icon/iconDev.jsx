import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import styled from 'styled-components';
import { purple } from '@material-ui/core/colors';

const ContainerIcon = styled.div`
    width: 25px;
    padding: 4px;
    margin-right: 20px;
    background: #f3e5f5;
    border-radius: 6px;
    box-shadow: 1px 1px 6px#ce93d8;
`;


const IconDev = () => {
    return ( 
        <ContainerIcon>
            <CodeIcon style={{ color: purple[700] }} ></CodeIcon>
        </ContainerIcon>
     );
}
 
export default IconDev;