import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //#region Generic
  rootContainer: {
    flex: 1,

    paddingVertical: 30,
    backgroundColor: "#1e2021",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,

    color: "#e8e6e3",
  },
  list: {
    marginTop: 20,
  },
  //#endregion

  //#region Main Page (Characters)
  characterCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#1A1A1A",

    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,

    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
    backgroundColor: "#2196F3",
    borderRadius: 50,
    padding: 10,
  },
  characterCard_TextContainer: {
    flex: 1,
  },
  characterCard_Title: {
    color: "#e8e6e3",
    fontWeight: "bold",
    fontSize: 16,
  },
  characterCard_Text: {
    color: "#b2aca2",
  },
  characterCard_ButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 5,
  },
  characterCard_ActionIcon: {
    paddingVertical: 5,
    paddingHorizontal: 7.4,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#da8466",
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  //#endregion

  customFieldContainer: {
    display: "flex",
    marginVertical: 20,
  },
});

export default styles;
