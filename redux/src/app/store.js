import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../feutures/todoslice";

export const store=configureStore({
    reducer:{
        todos:todoslice
    }       
})