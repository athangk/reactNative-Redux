import React from "react"
import UsersList from "../../components/userslist/UsersList"
import { SafeAreaView, ScrollView, StatusBar, View, Button, ActivityIndicator } from "react-native"
import { fetchUsers, selectLoading } from "./UserSliceReducer"
import { useDispatch, useSelector } from "react-redux"
import { styles } from "./Styles"
import Details from "../../components/details/Details"
import { UserData } from "../../models/UserDataInterface"
import { showToast } from "../../utilities/toast-utils"
import { selectSortedUsers } from "../combinedSelector"
import { addFollower } from "../followers/FollowersSliceReducer"

const UsersScreen = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const users = useSelector(selectSortedUsers)

  // dispatches addFollower action and pops up a toast message
  const handleAddFollower = (user: UserData) => {
    dispatch(addFollower(user))
    callToast(user.login, "added")
  }

  const callToast = (userName: string, type: string) => {
    showToast(userName, type)
  }

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Details></Details>
        <View style={styles.btnContainer}>
          <Button title={"Load git users"} onPress={() => dispatch(fetchUsers())} />
        </View>
        <View style={styles.loader}>{loading && <ActivityIndicator size="large" color="#1a4e66" />}</View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <UsersList
            users={users}
            actionTypeAdd={true}
            handleTouch={(user: UserData) => handleAddFollower(user)}
          ></UsersList>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default UsersScreen
