import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    idToken: "",
    localId: "",
    userName: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.idToken = action.payload.idToken;
            state.localId = action.payload.localId;
            state.userName = action.payload.userName;
        },
        clearUser: (state) => {
            state.email = "";
            state.idToken = "";
            state.localId = "";
            state.userName= "";
        },
        setUsername: (state, action) => {
            state.userName = action.payload;
        }
    }
});

export const { setUser, clearUser, setUsername } = authSlice.actions;

export default authSlice.reducer;
