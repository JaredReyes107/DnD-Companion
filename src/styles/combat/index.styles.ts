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
    fontSize: 20,
    fontWeight: "bold",
  },
  window_body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  closeButton: {
    marginTop: 10,
    textAlign: "center",
  },
  //#endregion

  //#region Damage Taken Window
  window_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  window_inputField: {
    minWidth: "40%",
    backgroundColor: "#212027",

    paddingVertical: 2,
    paddingHorizontal: 15,

    borderWidth: 2,
    borderColor: "#3e4446",
    borderRadius: 5,

    color: "#d8d4cf",
    fontSize: 40,
    textAlign: "center",
  },
  window_grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  window_grid_button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#212027",

    borderColor: "#42414d",
    borderWidth: 3,
    borderRadius: 15,
  },
  window_grid_buttonLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 1,
  },
  window_grid_buttonRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 1,
  },
  window_grid_button_text: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "600",
  },
  //#endregion

  //#region Spend HitDice Window
  window_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  window_text: {
    fontSize: 16,
  },
  window_smallIcon: {
    color: "#ffffff",
    fontSize: 18,
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

  sharedSection: {
    flexGrow: 1,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  sharedSectionLeft: {
    flex: 1,
  },
  sharedSectionRight: {
    width: "40%",
  },

  //#region Initiative order and Death Saving Throws
  initiativeOrderSection: {
    flexGrow: 1,

    maxWidth: "50%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,

    paddingVertical: 6.5,
    paddingHorizontal: 15,
    backgroundColor: "#525d7a",

    borderRadius: 5,
  },
  initiativeOrderTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    textAlignVertical: "center",
  },
  initiativeOrderText: {
    height: 40,

    fontSize: 24,
    fontWeight: "800",
    textAlignVertical: "center",
  },
  deathThrowsSection: {
    flexGrow: 1,
    maxWidth: "55%",
    minHeight: 121,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,

    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#f14269",

    borderRadius: 5,
  },
  deathThrowsTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  deathThrowsBody: {
    display: "flex",
    gap: 5,
  },
  deathThrowsSubsection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  deathThrowsText: {
    fontSize: 14,
    fontWeight: "400",
    textAlignVertical: "center",
  },
  deathThrowsTally: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  deathThrowsTallyButton: {
    color: "#ffffff",
    fontSize: 20,
  },
  deathThrowsTallyIcon: {
    color: "#ffffff",
    fontSize: 20,
  },
  deathThrowsDisabled: {
    color: "#c9bebe",
  },
  //#endregion

  //#region HitDie and Rests
  hitDieSection: {
    flexGrow: 1,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,

    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 7,

    backgroundColor: "#6d5353",
  },
  hitDieTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  hitDieBody: {
    width: "100%",
    minHeight: 56,
    maxHeight: 56,
    overflow: "hidden",

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  hitDieText: {
    width: "45%",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "center",
  },
  restSection: {
    flexGrow: 1,
    maxWidth: "55%",

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
    fontWeight: "600",
  },
  //#endregion
});

export default styles;
