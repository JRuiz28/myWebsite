import { CAMBIAR_CHECK } from '../../types/index';

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){

        case CAMBIAR_CHECK: 
            return {
                ...state,
                checked: action.payload
            }

        default: 
            return state;
    }
}