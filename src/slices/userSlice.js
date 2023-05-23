import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLogin } from "../apis/userAPI";

// async actions
export const login = createAsyncThunk("user/login", async (values, { getState }) => {
    try {
        const data = await apiLogin(values);
        const { rememberMe } = getState().user;
        if (rememberMe) {
            localStorage.setItem("userInfo", JSON.stringify(data.content));
        }
        return data.content;
    } catch (error) {
        throw error.response?.data?.content;
    }
});

// default state
const initialState = {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
    isLoading: false,
    error: null,
    rememberMe: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            return { ...state, user: null };
        },
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            return { ...state, isLoading: true };
        });
        builder.addCase(login.fulfilled, (state, action) => {
            return { ...state, isLoading: false, user: action.payload };
        });
        builder.addCase(login.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.error.message };
        });
    },
});

export const { logout, setRememberMe } = userSlice.actions;

export default userSlice.reducer;