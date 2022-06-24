import { createAsyncThunk, createSlice, createSelector, createEntityAdapter } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { UserData } from "../../models/UserDataInterface"

type followers = UserData

// create followersAdapter
const followersAdapter = createEntityAdapter<followers>({
  selectId: (followers) => followers.login,
  sortComparer: (a, b) => a.login.localeCompare(b.login),
})

// followersSlice only for user actions
const followersSlice = createSlice({
  name: "followers",
  initialState: followersAdapter.getInitialState(),
  reducers: {
    addFollower(state, action) {
      followersAdapter.addOne(state, action.payload)
    },
    removeFollower(state, action) {
      followersAdapter.removeOne(state, action.payload.id)
    },
  },
  extraReducers: {},
})

// setup of actions
export const { addFollower, removeFollower } = followersSlice.actions

// setup of selectors
export const { selectAll: selectFollowers } = followersAdapter.getSelectors(
  (state: RootState) => state.followers
)


 export const selectedSortedFollowers = createSelector([selectFollowers], (followers) => {
  let currentFollowers: UserData[] = followers
  currentFollowers.sort((a, b) => a.login.toLowerCase().localeCompare(b.login.toLowerCase()))

  return currentFollowers
})

export default followersSlice.reducer
