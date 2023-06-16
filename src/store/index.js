import { createStore } from 'redux';
import {rootReduces} from "./reducers/root";
import {loadState, saveState} from "./local-storage";
import throttle from "lodash/throttle";

export const store = () => {
    const persistedState = loadState();

    const store = createStore(
        rootReduces,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    store.subscribe(throttle(() => {
        saveState({
            filters: store.getState().filters
        });
    }, 1000))

    return store;
};