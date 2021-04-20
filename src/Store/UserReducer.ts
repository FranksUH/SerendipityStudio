import APP_ACTIONS from './../Domain/ActionTypes'

const initialState = {
    userName: '',
    accessToken: '',
};

const userReducer = (state = initialState, action: any) => {
    console.log('REDUCER');
    switch (action.type) {
        case APP_ACTIONS.LOGIN:
            return {
                ...state,
                userName: action.payload.name,
                accessToken: action.payload.token
            };

        case APP_ACTIONS.LOGOUT:
            return initialState;
    
        default:
            return state;
    }
}

export default userReducer;