import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resourceCategoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,

    width: "100%",
    marginTop: 10,
  },
  resourceCategoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  resourceElementsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,

    width: "100%",
  },
  resourceElementContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,

    minWidth: "30%",
    maxWidth: "40%",
    marginBottom: 12,

    paddingHorizontal: 12,
    paddingVertical: 8,

    backgroundColor: "#D69F38",

    borderRadius: 5,
  },
  resourceElementName: {
    width: "100%",

    paddingHorizontal: 5,

    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  resourceElementValues: {
    fontSize: 16,
  },
  resourceElementButtonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default styles;
