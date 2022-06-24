import React from "react"
import Toast, {
  AnyObject,
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast
} from "react-native-toast-message"

export const showToast = (userName: string, type: string) => {
  Toast.show({
    position: "top",
    topOffset: 300,
    visibilityTime: 2000,
    type: type === "removed" ? "error" : "success",
    text1: type,
    text2: userName + " is " + type,
  })
}

const renderToast = (Component: React.FC<BaseToastProps>) => (props: BaseToastProps) =>
  (
    <Component
      text1Style={{ fontSize: 20 }}
      text2Style={{ fontSize: 16 }}
      onTrailingIconPress={() => Toast.hide()}
      {...props}
    />
  )

export const toastConfig: AnyObject = {
  success: renderToast(SuccessToast as React.FC<BaseToastProps>),
  error: renderToast(ErrorToast as React.FC<BaseToastProps>),
  info: renderToast(InfoToast as React.FC<BaseToastProps>),
}

export default showToast

