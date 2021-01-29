import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { cyan } from '@material-ui/core/colors';
import styled from 'styled-components';


const IconMail = ({size}) => {

    
    const DivIconMail = styled.div`
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
        <DivIconMail>
            <a href="mailto:jrc2899@gmail.com" target='_blank' rel="noreferrer">
                <MailOutlineIcon style={{ color: cyan[900], fontSize: size }}></MailOutlineIcon>
            </a>
        </DivIconMail>
     );
}
 
export default IconMail;