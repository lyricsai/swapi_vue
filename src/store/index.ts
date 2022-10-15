/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from "vuex";
import swapi from "@/store/swapi";

export default createStore({
    modules: { swapi },
});
