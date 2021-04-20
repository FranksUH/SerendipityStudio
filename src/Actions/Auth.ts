// import {useDispatch, useStore} from 'react-redux'
import APP_ACTIONS from './../Domain/ActionTypes'

export interface ICredential{
    userName: string,
    password: string,
};

// const dispatch = useDispatch();
// const getState = useStore().getState;

const auth = {
    login: (credentials: ICredential) => {
        // llamar a la API para obtener un token de accesso
        const token = 'token de prueba!!!';
        const name = 'Frankie';

        return {
            type: APP_ACTIONS.LOGIN,
            payload: {token, name}
        };
    },
    logout: () => {
        return {
            type: APP_ACTIONS.LOGOUT            
        };
    }
}

export default auth;