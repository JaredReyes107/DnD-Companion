import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  headerContainer: 
  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',

    width: '90%',

    marginBottom: 20,
  },
  //#region Bloques de HP
  blockContainer: 
  {
    width: '90%',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
  },
  blockTitle: 
  {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  blockBody: 
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blockButton: 
  {
    fontSize: 36,
    color: '#fff',
    paddingHorizontal: 20,
  },
  blockValue: 
  {
    fontSize: 64,
    color: '#fff',
    textAlign: 'center',
  },
  //#endregion

  //#region Info adicional, Descansos y Salvaciones de Muerte
  extrasContainer:
  {
    display: 'flex'
  }
});

export default styles;