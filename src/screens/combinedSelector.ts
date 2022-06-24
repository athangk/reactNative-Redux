import { createSelector } from "@reduxjs/toolkit"
import { UserData } from "../models/UserDataInterface"
import { selectFollowers } from "./followers/FollowersSliceReducer"
import { selectUsers } from "./users/UserSliceReducer"

/**
 * Filters out users that are NOT in the follow list
 */
export const selectNonFollowers = createSelector([selectUsers, selectFollowers], (users, followers) => {
  let currentUsers: UserData[] = users
  let currentFollowers: UserData[] = followers
  let filteredUsers = currentUsers.filter(({ login: a }) => !currentFollowers.some(({ login: b }) => b === a))

  return filteredUsers
})

/**
 * Sorts users in alphabetical order
 */
export const selectSortedUsers = createSelector([selectNonFollowers], (users) => {
  let currentUsers: UserData[] = users
  currentUsers.sort((a, b) => a.login.toLowerCase().localeCompare(b.login.toLowerCase()))

  return currentUsers
})
