import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bookStoreReducer from './reducers/bookstore';



const appReducer = combineReducers({
    bookStore: bookStoreReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

const enhancers = [
    applyMiddleware(logger, thunk),
]

const persistedState = loadFromLocalStorage();
const store = createStore(appReducer, persistedState, composeEnhancers(...enhancers));



store.subscribe(() => saveToLocalStorage(store.getState()));


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

export default store;