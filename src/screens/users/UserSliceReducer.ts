import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { UserData } from "../../models/UserDataInterface"

type users = UserData

// create usersAdapter
const usersAdapter = createEntityAdapter<users>({
  selectId: (users) => users.login,
  sortComparer: (a, b) => a.login.localeCompare(b.login),
})

// createAsyncThunk without the need of middleware and sets id on the api response
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://api.github.com/users")
  const result = (await response.json()) as UserData[]
  const userDataList = result.map((el) => {
    el.id = el.login
    return el
  })
  return userDataList
})

// userSlice only for the createAsyncThunk result
const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      usersAdapter.setAll(state, action.payload)
      state.loading = false
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false
    })
  },
})

// setup of selectors
export const selectLoading = (state: RootState) => state.users.loading

export const { selectAll: selectUsers } = usersAdapter.getSelectors((state: RootState) => state.users)

export default usersSlice.reducer
