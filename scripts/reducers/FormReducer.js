import {INTIALISE_HOME} from "./constants";

export const
    FormReducer = (state = {}, action) => {
        const {type} = action;
        switch (type) {
            case INTIALISE_HOME:
                return Object.assign({}, state, {
                    isLoading: false
                });
            default:
                return state;
        }
    };

export default FormReducer;
