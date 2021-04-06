import {IState} from './IState';

const initialState: IState = {
    successfullyBooked: false
}

const reducer = (oldState: IState = initialState, action: any) => 
{
    return oldState;
}

export default reducer;