import React from 'react'
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { grey } from '@material-ui/core/colors';
import styled from 'styled-components';

const DivDrag = styled.div`
    padding-top: 8px;
    padding-bottom: 30px;
    width: 100%;
    text-align: center;
`;


const IconDrag = ({checked}) => {
    return ( 
        <DivDrag>
        {checked
        ? (
            <DragHandleIcon
                style={{ color: grey[50] }}
            ></DragHandleIcon>  
        )
        : (
            <DragHandleIcon
                style={{ color: grey[900] }}
            ></DragHandleIcon>  
        )
        }
        
        </DivDrag>
     );
}
 
export default IconDrag;