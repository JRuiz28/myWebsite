import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { cyan } from '@material-ui/core/colors';
import styled from 'styled-components';


const IconLinkendIn = ({size}) => {

    const DivIconLinkendIn = styled.div`
        width: ${size}px;
        height: ${size}px;
        margin-left: 5px;
        margin-bottom: 4px;

        &:hover{
            cursor:pointer;
            margin-bottom: 0px;
            transform: translate(0px, -3px);
            border-bottom: 4px solid #006064;
        }
    `;
    return ( 
        <DivIconLinkendIn>
            <a href="https://www.linkedin.com/in/josuerc/" target='_blank' rel="noreferrer">
                <LinkedInIcon style={{ color: cyan[900], fontSize: size }}></LinkedInIcon>
            </a>
        </DivIconLinkendIn>
     );
}
 
export default IconLinkendIn;