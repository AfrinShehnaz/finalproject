import { usertypes } from './UserActionTypes';

export const userDetails = (userInfo) => {
    return {
        type: usertypes.USER_SUCCESS,
        userInfo: userInfo
    }
}
export default userDetails;