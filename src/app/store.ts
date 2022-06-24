import { configureStore } from "@reduxjs/toolkit"

import usersReducer from "../screens/users/UserSliceReducer"
import followersSliceReducer from "../screens/followers/FollowersSliceReducer"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    followers: followersSliceReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
