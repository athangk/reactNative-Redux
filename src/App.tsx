import React from "react"

import { Provider } from "react-redux"
import { store } from "./app/store"
import AppNavigator from "./navigation/index"
import Toast from "react-native-toast-message"
import { toastConfig } from "./utilities/toast-utils"

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator></AppNavigator>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  )
}

export default App
