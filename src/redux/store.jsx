

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import userReducer from './userSlice'
import complaintReducer from './complaintSlice'

// redux persist - - - - ---->>

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
    complaints : complaintReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);