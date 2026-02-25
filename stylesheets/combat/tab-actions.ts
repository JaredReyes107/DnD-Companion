import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 7.5,
  },
  statRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 7.5,
  },
  primaryStatCell: {
    flex: 1,
    height: "100%",
    gap: 1,

    backgroundColor: "#3e21aa",

    borderRadius: 5,
  },
  primaryStatText: {
    color: "#ecedee",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  primaryStatValue: {
    fontFamily: "Montserrat",
    fontSize: 18,
    color: "#cccccc",

    textAlign: "center",
  },
  spellcastingStatCell: {
    flex: 1,
    height: "100%",
    gap: 1,

    backgroundColor: "#922551",

    borderRadius: 5,
  },
  spellcastingText: {
    color: "#ecedee",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  spellcastingValue: {
    fontFamily: "Montserrat",
    fontSize: 18,
    color: "#cccccc",

    textAlign: "center",
  },
  actionSlotCell: {
    flex: 1,
    height: "100%",
    paddingBottom: 5,

    alignItems: "center",

    backgroundColor: "#ca6b2c",

    borderRadius: 5,
  },
  actionSlotContent: {
    alignItems: "center",
  },
  actionSlotText: {
    fontSize: 14,
    textAlign: "center",
  },
  actionSlotValue: {
    fontSize: 16,
  },

  actionBoard: {
    flex: 1,

    display: "flex",
    justifyContent: "flex-start",
    gap: 7.5,

    marginVertical: 7.5,
  },
  actionBoardRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  actionBoardRowHeader: {
    fontSize: 14,
  },
  actionBoardRowContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  actionBoardCell: {
    width: 60,
    height: 60,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#3066b1",

    borderRadius: 8,
  },
  actionBoardCellDisabled: {
    opacity: 0.35,
  },
  actionBoardCellTitle: {
    fontSize: 12,
    textAlign: "center",
    lineHeight: 15,
  },

  footerSection: {
    display: "flex",
    justifyContent: "center",
  },
});

export default styles;
