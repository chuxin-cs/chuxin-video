import {createSlice, PayloadAction} from "@reduxjs/toolkit"

// 定义状态类型
interface CountState {
    count: number;
}

// 初始化状态（带类型标注）
const initialState: CountState = {
    count: 0
};

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state: CountState, action: PayloadAction<number>) => {
            state.count += (action.payload || 1);
        },
        decrement: (state: CountState, action: PayloadAction<number>) => {
            state.count -= (action.payload || 1);
        },
        reset: () => initialState
    }
})

export const {increment, decrement, reset} = countSlice.actions;
export default countSlice.reducer