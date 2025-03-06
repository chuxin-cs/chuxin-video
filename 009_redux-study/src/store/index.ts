import {configureStore} from '@reduxjs/toolkit'
import countReducer from "./modules/count"
import listReducer from "./modules/list"

export const store = configureStore({
    reducer: {
        count: countReducer,
        list: listReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;