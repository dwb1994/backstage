// Actions
const LOGIN = 'yapi/user/LOGIN';

// Reducer user
const initialState = {
    loginState: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            console.log(action);
            return {
                ...state,
                isLogin: true
            }
        }
        default:
            return state;
    }
};

export function login(data) {
    console.log(data)
    return (dispatch, getState) => {
        console.log(dispatch, getState)
        dispatch({
            type: LOGIN,
            loginState: data
        });
    }
}