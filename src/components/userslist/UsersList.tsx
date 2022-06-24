import React from "react"
import { View, Text, Image } from "react-native"
import { styles } from "./Styles"
import { UserData } from "../../models/UserDataInterface"
import ActionBtnList from "../buttons/ActionBtnList"

interface UsersListProps {
  users: UserData[]
  actionTypeAdd: boolean
  handleTouch: (user: UserData) => void
}

const UsersList = ({ users, actionTypeAdd, handleTouch }: UsersListProps) => {
  return (
    <View>
      {users.map((user) => {
        return (
          <View style={styles.container} key={user.login}>
            <View style={styles.innerContainer}>
              <View style={styles.imageAliasContainer}>
                <Image style={styles.image} source={{ uri: user.avatar_url }} blurRadius={12} />
                <Text style={styles.username}>{user.login}</Text>
              </View>
              <ActionBtnList
                handleTouch={() => handleTouch(user)}
                actionTypeAdd={actionTypeAdd}
              ></ActionBtnList>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.labelURL}>{user.repos_url}</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default UsersList
