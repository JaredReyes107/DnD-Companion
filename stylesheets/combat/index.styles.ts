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
    width: "90%",
  },

  //#region Generic Window Overlay
  overlay: {
    flex: 1,
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
    flex: 1,

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
    width: "100%",
  },
  blockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,

    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  blockTitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  blockCenter: {
    flex: 1,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  blockButton: {
    fontSize: 50,
    fontWeight: "regular",
    color: "#fff",
  },
  blockValue: {
    width: "100%",

    fontSize: 64,
    color: "#fff",
    textAlign: "center",
  },
  //#endregion

  //#region Rests and Death Saving Throws
  extraSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,

    width: "100%",

    marginTop: 10,
  },
  restSection: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 15,
  },
  restButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,

    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#F4AE44",

    borderRadius: 7,
  },
  restText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  deathThrowsSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,

    height: "100%",

    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#f14269",

    borderRadius: 5,
  },
  deathThrowsTitle: {
    maxWidth: 180,

    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  deathThrowsBody: {
    display: "flex",
    justifyContent: "space-evenly",
    flexShrink: 1,
    gap: 5,

    height: "100%",
  },
  deathThrowsSubsection: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  deathThrowsText: {
    fontSize: 16,
    fontWeight: "regular",
  },
  deathThrowsTally: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  //#endregion
});

export default styles;
