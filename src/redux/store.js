import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "user",
    storage: storage,
    version: 1

}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const App_Strore = configureStore({
    reducer: {
        user: persistedReducer
    }
})

export const persistor = persistStore(App_Strore)
