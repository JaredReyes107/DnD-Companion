import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //#region Character Creation
  fieldContainer: {
    display: "flex",
    gap: 10,

    marginBottom: 10,
  },
  fieldHeader: {
    color: "#d8d4cf",
  },
  subfieldContainer: {
    display: "flex",
    gap: 10,

    paddingLeft: 25,

    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#3e4446",
    padding: 10,
    borderRadius: 5,

    color: "#d8d4cf",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#3e4446",
    borderRadius: 5,

    color: "#d8d4cf",
  },
  picker: {
    minHeight: 0,

    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 10,

    borderWidth: 0,
    borderColor: "#3e4446",
    borderRadius: 5,

    color: "#d8d4cf",
  },
  pickerText: {
    color: "#d8d4cf",
  },

  counterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  counterInput: {
    flex: 1,

    borderWidth: 1,
    borderColor: "#3e4446",
    padding: 10,
    borderRadius: 5,

    color: "#d8d4cf",
  },
  counterButtonsContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  counterButtons: {
    width: 36,
    height: 36,
    backgroundColor: "#35393b",
    padding: 10,
    margin: 5,
    borderRadius: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },

  statsContainer: {
    display: "flex",
    paddingRight: 10,
    paddingLeft: 10,

    gap: 5,
  },
  statContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    maxWidth: 500,
  },
  statTitle: {
    color: "#cdc8c2",
  },
  statDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  statValue: {
    width: 125,

    borderWidth: 1,
    borderColor: "#3e4446",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 5,

    color: "#d8d4cf",
  },
  statDetailsButtonsContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  statDetailsButtons: {
    width: 24,
    height: 24,
    backgroundColor: "#35393b",
    padding: 5,
    margin: 3,
    borderRadius: 50,

    justifyContent: "center",
    alignItems: "center",
  },

  proficienciesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: 5,
  },
  proficiencyButton: {},

  addButtonContainer: {
    display: "flex",
    alignItems: "center",

    margin: 10,
  },
  addButton: {
    width: "50%",
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
  },
  //#endregion
});

export default styles;
