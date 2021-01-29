import React from 'react'
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';
import { deepPurple } from '@material-ui/core/colors';
import IconLogro from '../../icon/iconLogro';

const DivSkill = styled.div`
    margin: 50px 0px;
    border-radius: 16px;
    box-shadow: 2px 2px 10px 0.5px #613fa5;

    
    @media(min-width: 960px){
        width: 50%;
        margin:auto;
    }
`;

const DivTitle = styled.div`
    text-align: center;
    margin: 40px;
    padding: 20px 0;
`

const DivSubtitle = styled.div`
    display: flex;
    justify-content: left;
    text-align: center;
    margin-bottom: 10px;

    & h3{
        margin: auto 0;
    }
`;

const DivDetail = styled.div`
    padding-top: 20px;
    text-align: left;
`;

const DivClass = styled.div`
    padding-bottom: 20px;
`;

const DetailSkill = ({checked, skill}) => {

    const {title, subtitles} = skill;

    function ico(){
        if(title === 'Frontend Dev')
            return <DesktopMacIcon  style={{ color: deepPurple["A400"], fontSize: 50 }}> </DesktopMacIcon>
            
        else if(title === 'Backend Dev')
            return <CodeIcon  style={{ color: deepPurple["A400"], fontSize: 50 }}> </CodeIcon>
            
        else if(title === 'Base de Datos')
            return <StorageIcon  style={{ color: deepPurple["A400"], fontSize: 50 }}> </StorageIcon>
            
        else if(title === 'Móvil Dev')
            return <DeveloperModeIcon  style={{ color: deepPurple["A400"], fontSize: 50 }}> </DeveloperModeIcon>
            
        else if(title === 'Otros')
            return <InfoIcon  style={{ color: deepPurple["A400"], fontSize: 50 }}> </InfoIcon>
    }

    return ( 
        <DivSkill>
            <DivTitle>
                {ico()}
                

                <h1 className={checked ? 'color-light' : 'color-dark-title'}>
                    {title}
                </h1>
                <br/>
                <hr/>

                <DivDetail>
                    {subtitles.map( sub => (
                        <DivClass key={sub.id}>
                            <DivSubtitle> 
                                <IconLogro></IconLogro><h3 className={checked ? 'color-light' : 'color-dark'}> {sub.name} </h3>
                            </DivSubtitle>
                            
                            <ul> 
                                {sub.list.map( name_l => (
                                    <li className={checked ? 'color-light' : 'color-dark'} key={name_l}> {name_l} </li> 
                                ))}
                            </ul>
                        </DivClass>
                    ))}  
                </DivDetail>

            </DivTitle>
        </DivSkill>
     );
}
 
export default DetailSkill;