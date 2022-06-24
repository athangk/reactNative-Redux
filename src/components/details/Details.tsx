import React from "react"
import { View, Text } from "react-native"
import { styles } from "./Styles"

const Details = () => {
  return (
    <View>
      <Text style={styles.infoText}>
        {`1. Fetch users from github\n2. Sorts them in alphabetical order.\n3. Adds small blur on images\n4. Users can be added on follow list`}
      </Text>
    </View>
  )
}

export default Details
