import React from "react"
import { createAppContainer } from "react-navigation"
import { createMaterialTopTabNavigator } from "react-navigation-tabs"

import UsersScreen from "../screens/users/UsersScreen"
import FollowersScreen from "../screens/followers/FollowersScreen"
import Icon from "react-native-vector-icons/Ionicons"

interface TabBarItemsProps {
  tintColor: string
  focused: boolean
}

const AppNavigator = createMaterialTopTabNavigator(
  {
    Users: {
      screen: UsersScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }: TabBarItemsProps) => (
          <Icon name={focused ? "ios-home" : "md-home"} color={tintColor} size={25} />
        ),
      },
    },
    Follow: {
      screen: FollowersScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }: TabBarItemsProps) => (
          <Icon name={focused ? "ios-person" : "md-person"} color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "#0D82A5",
      },
    },
  }
)
export default createAppContainer(AppNavigator)
