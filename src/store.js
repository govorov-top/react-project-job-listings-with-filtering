import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import {filterReducer} from "./featurers/Filter/filter-slice";
import {positionReducer} from "./featurers/Positions/position-slice";

const rootReducer = combineReducers({
    filters: filterReducer,
    position: positionReducer
});

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: {
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                }
            }
        }).concat(logger),
    enhancers: []
});

export const persist = persistStore(store);
