import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Match } from "../../types/type";

export interface initialState {
    data: Match[],
    isLoading: boolean,
    error: null | string
}

export const getCards = createAsyncThunk<Match[], string, { rejectValue: string }>(
    'matches/getDateMatches',
    async (url, { rejectWithValue }) => {
        try {
            const response = await fetch('https://app.ftoyd.com/fronttemp-service/' + url);
            if (!response.ok) {
                throw new Error('Ошибка: не удалось загрузить информацию');
            }
            const data = await response.json();
            return data.data.matches;
        } catch (error) {
            return rejectWithValue('Ошибка: не удалось загрузить информацию');
        }
    }
)

const initialState: initialState = {
    data: [],
    isLoading: false,
    error: null
}

const cardsSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCards.fulfilled, (state, action: PayloadAction<Match[]>) => {
                state.data = action.payload;
                state.isLoading = false
            })
            .addCase(getCards.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getCards.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка: не удалось загрузить информацию'
            })
    }
})

export default cardsSlice.reducer