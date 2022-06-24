import React from "react"
import { TouchableOpacity } from "react-native"
import { UserData } from "../../models/UserDataInterface"
import { styles } from "./Styles"
import Icon from "react-native-vector-icons/Ionicons"

interface BtnProps {
  actionTypeAdd: boolean
  handleTouch: () => void
}

const ActionBtnList = ({ actionTypeAdd, handleTouch }: BtnProps) => {
  return (
    <TouchableOpacity style={[styles.checkBtn, !actionTypeAdd && styles.removeBtn]} onPress={handleTouch}>
      {actionTypeAdd && <Icon name={"add-circle-outline"} color={"white"} size={24} />}
      {!actionTypeAdd && <Icon name={"close-outline"} color={"white"} size={24} />}
    </TouchableOpacity>
  )
}

export default ActionBtnList
