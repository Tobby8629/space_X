import { configureStore } from "@reduxjs/toolkit"
import missionSlice from "./Mission/missionSlice"
const store = configureStore({
    reducer: {
      Mission: missionSlice,
    }
})

export default store;