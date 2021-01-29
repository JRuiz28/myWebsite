import React, { useReducer } from 'react';

import themeContext from './themeContext';
import themeReducer from './themeReducer';

import { CAMBIAR_CHECK } from '../../types/index';

const ThemeState = props => {

    const initialState = {
        checked: false
    }

    const [state, dispatch] = useReducer(themeReducer, initialState);

    //Cambiar el tema del app
    const cambiarCheck = activo => {
        dispatch({
            type: CAMBIAR_CHECK,
            payload: activo
        })
    }

    return(
        <themeContext.Provider
            value={{
                checked: state.checked,
                cambiarCheck
            }}
        >
            {props.children}
        </themeContext.Provider>
    );
}

export default ThemeState;