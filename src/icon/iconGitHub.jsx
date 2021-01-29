import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { cyan } from '@material-ui/core/colors';
import styled from 'styled-components';


const IconGitHub = ({size}) => {

    const DivIconGit = styled.div`
        width: ${size}px;
        height: ${size}px;
        margin-left: 10px;
        margin-bottom: 4px;

        &:hover{
            cursor:pointer;
            margin-bottom: 0px;
            transform: translate(0px, -3px);
            border-bottom: 4px solid #006064;
        }
    `;
    return ( 
        <DivIconGit>
            <a href="https://github.com/JRuiz28" target='_blank' rel="noreferrer">
                <GitHubIcon style={{ color: cyan[900], fontSize: size }}></GitHubIcon>
            </a>
        </DivIconGit>
     );
}
 
export default IconGitHub;