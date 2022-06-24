import React from "react"
import UsersList from "../../components/userslist/UsersList"
import { SafeAreaView, ScrollView, StatusBar, View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { styles } from "./Styles"
import { UserData } from "../../models/UserDataInterface"
import { showToast } from "../../utilities/toast-utils"
import { removeFollower, selectedSortedFollowers } from "./FollowersSliceReducer"

const FollowersScreen = () => {
  const followers = useSelector(selectedSortedFollowers)
  const dispatch = useDispatch()

  // dispatches removeFollower action and pops up a toast message
  const handleRemoveFollower = (user: UserData) => {
    dispatch(removeFollower(user))
    callToast(user.login, "removed")
  }

  const callToast = (userName: string, type: string) => {
    showToast(userName, type)
  }

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.infoText}> Follow List </Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <UsersList
            users={followers}
            actionTypeAdd={false}
            handleTouch={(user: UserData) => handleRemoveFollower(user)}
          ></UsersList>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default FollowersScreen
