import { usertypes } from './UserActionTypes';
const initialState = {
    userdata: null
};


const UReducer = (state = initialState, action) => {
    switch (action.usertype) {
        case usertypes.USER_SUCCESS:
            {
                return {
                    ...state,
                    userData: action.userInfo,
                };
            }
        default: return state;
    }
};
export default UReducer;