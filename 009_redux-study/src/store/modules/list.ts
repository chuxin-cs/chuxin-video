export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: number
}

export type FilterStatus = "all" | "completed" | "active"

export interface TodoState {
    items: Todo[],
    filter: FilterStatus,
    loading: boolean,
    error: string | null
}

import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"

// 异步示例：模拟保存到服务器
export const saveTodo = createAsyncThunk(
    'todos/saveTodo',
    async (text: string, {rejectWithValue}) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return {id: Math.random() + '', text} as Pick<Todo, 'id' | 'text'>
        } catch (err) {
            return rejectWithValue('保存失败')
        }
    }
)

const initialState: TodoState = {
    items: [],
    filter: "all",
    loading: false,
    error: null
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        toggleTodo: (state: TodoState, action: PayloadAction<string>) => {
            const todo = state.items.find(t => t.id === action.payload)
            if (todo) todo.completed = !todo.completed
        },
        deleteTodo: (state: TodoState, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        setFilter: (state: TodoState, action: PayloadAction<FilterStatus>) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveTodo.pending, (state: TodoState) => {
                state.loading = true
                state.error = null
            })
            .addCase(saveTodo.fulfilled, (state, action) => {
                state.loading = false
                state.items.unshift({
                    ...action.payload,
                    completed: false,
                    createdAt: Date.now()
                })
            })
            .addCase(saveTodo.rejected, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.error = action.payload as string // 来自 rejectWithValue
                } else {
                    state.error = action.error.message || '未知错误'
                }
            })
    }
})

export const {toggleTodo, deleteTodo, setFilter} = todoSlice.actions
export default todoSlice.reducer