import { createStore } from 'redux'
import localStorageAPI from './../Services/localStorageAPI'
import mainReducer from './MainReducer'

const initialData = localStorageAPI.load();
const store = initialData? createStore(mainReducer, {user: initialData}) : createStore(mainReducer);

//each time state change user's info going to be saved on localstorage
store.subscribe(() => {
    localStorageAPI.save(store.getState().user);
});

export default store;