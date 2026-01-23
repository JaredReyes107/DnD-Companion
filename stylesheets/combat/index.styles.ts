import { StyleSheet } from "react-native";

/* 
  Otros colores 
  - #f3883b
  - #4ee4e2
  - #4a9f5c
  - #f14269
  - #4f49dd
  - #8d3d9e
*/

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",

    width: "90%",

    marginBottom: 20,
  },
  mainBody: {
    width: "100%",
  },

  //#region Generic Window Overlay
  overlay: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  window: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,

    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  window_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  window_body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  closeButton: {
    marginTop: 10,
    textAlign: "center",
  },
  //#endregion

  //#region Damage Taken Window
  damageTaken_Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  damageTaken_Input: {
    flexGrow: 1,

    borderWidth: 1,
    borderColor: "#3e4446",
    padding: 10,
    borderRadius: 5,

    color: "#d8d4cf",
    textAlign: "center",
  },
  damageTypes_Grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,

    width: "80%",
  },
  damageTypes_Button: {
    display: "flex",
    justifyContent: "center",

    width: 35,
    height: 35,

    backgroundColor: "gray",
  },
  damageTypes_Icon: {
    height: 32,

    textAlign: "center",
  },
  //#endregion

  //#region HP Blocks
  mainSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,

    width: "100%",
  },
  blockContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",

    borderRadius: 12,
  },
  blockHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  blockTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  blockBody: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  blockButtonContainer: {
    flexGrow: 1,
  },
  blockButtonIcon: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "regular",
    textAlignVertical: "center",
  },
  blockButtonIconLeft: {
    textAlign: "left",
    paddingLeft: 15,
  },
  blockButtonIconRight: {
    textAlign: "right",
    paddingRight: 15,
  },
  blockValueContainer: {
    width: 90,
    height: "100%",
  },
  blockValueText: {
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
  },
  //#endregion

  //#region Rests and Death Saving Throws
  extraSection: {
    flexGrow: 1,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  restSection: {
    flexGrow: 1,
    maxWidth: "60%",

    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  restButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,

    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#F4AE44",

    borderRadius: 7,
  },
  restIcon: {
    color: "#ffffff",
    fontSize: 24,
  },
  restText: {
    fontSize: 18,
    fontWeight: 600,
  },
  deathThrowsSection: {
    maxWidth: "40%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,

    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#f14269",

    borderRadius: 5,
  },
  deathThrowsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  deathThrowsBody: {
    display: "flex",
    //justifyContent: "space-evenly",
    flexShrink: 1,
    gap: 5,
  },
  deathThrowsSubsection: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  deathThrowsText: {
    fontSize: 14,
    fontWeight: 400,
    textAlignVertical: "center",
  },
  deathThrowsTally: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  //#endregion
});

export default styles;
