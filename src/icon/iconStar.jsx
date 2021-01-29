import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components';
import { yellow } from '@material-ui/core/colors';

const ContainerIcon = styled.div`
    width: 32px;
    padding: 4px;
    margin: auto;
    background: #FFFDC4;
    border-radius: 6px;
    box-shadow: 1px 1px 6px#ffeb3b;
`;

const IconStar = () => {
    return ( 
        <ContainerIcon>
            <StarIcon style={{ color: yellow[500] }} ></StarIcon>
        </ContainerIcon>
     );
}
 
export default IconStar;