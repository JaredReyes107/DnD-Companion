import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resourceCategoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,

    width: "100%",
    marginBottom: 10,
  },
  resourceCategoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  resourceElementContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,

    marginBottom: 12,

    paddingHorizontal: 12,
    paddingVertical: 8,

    backgroundColor: "#D69F38",
  },
  resourceElementName: {
    minWidth: 80,
    maxWidth: 120,

    fontSize: 18,
    fontWeight: "600",
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
