import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExists = localStorage.getItem('user')

const initialState = {
    user: userExists ? JSON.parse(userExists) : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.isLoading = false
                state.isSuccess = false
                state.isError = false
                state.message = ''
            })
    }
})

export const register = createAsyncThunk('api/register', async (user) => {
    try {
        return await authService.registerUser(user)
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
    }
})
export const login = createAsyncThunk('api/login', async (user) => {
    try {
        return await authService.loginUser(user)
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
    }
})
export const logout = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem('user')
})

export default authSlice.reducer