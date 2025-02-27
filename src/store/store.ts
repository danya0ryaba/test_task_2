import cardsSlice from './cardsSlice/cardsSlice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const rootReducer = combineReducers({
    cardsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector