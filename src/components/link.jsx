import React from 'react';
import IconMail from '../icon/iconMail';
import IconLinkendIn from '../icon/iconLinkendIn';
import IconGitHub from '../icon/iconGitHub';

const Links = ({size}) => {
    return ( 
        <>
            <IconLinkendIn size={size} />
            <IconMail size={size} />
            <IconGitHub size={size} />
        </>
     );
}
 
export default Links;