import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: 500,
    justifyContent: "center",
    alignSelf: "center",
  },
  loader: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  container: {
    marginVertical: 10,
    backgroundColor: "#165170",
    width: 300,
    borderRadius: 20,
    padding: 20,
  },
  innerContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  imageAliasContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  dataContainer: {
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  username: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 44,
    height: 44,
  },
  labelURL: {
    color: "#25baba",
  },
})
