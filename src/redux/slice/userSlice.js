import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { name: "", password: "", token: "" },
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.password = action.payload.password;
            state.token = action.payload.token;
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer; 