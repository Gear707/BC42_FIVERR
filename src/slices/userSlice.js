import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLogin } from "../apis/userAPI";

// async actions
export const login = createAsyncThunk("user/login", async (values) => {
    try {
        const data = await apiLogin(values);
        localStorage.setItem("userInfo", JSON.stringify(data.content));
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
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            return { ...state, user: null };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            return { ...state, isLoading: true};
        });
        builder.addCase(login.fulfilled, (state, action) => {
            return { ...state, isLoading: false, user: action.payload };
        });
        builder.addCase(login.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.error.message };
        });
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;