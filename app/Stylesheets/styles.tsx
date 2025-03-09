import { StyleSheet } from "react-native";  

const styles = StyleSheet.create(
{
  //#region Generic
  rootContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e2021',   
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

    color: '#e8e6e3',
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
    padding: 10,
    backgroundColor: '#1A1A1A',

    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    
    marginBottom: 10,
  },
  listItem_textContainer: {
    flex: 1,
  },
  listItem_Title: {
    color: '#e8e6e3',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listItem_Text: {
    color: '#b2aca2',
  },
  iconContainer: {
    marginRight: 10,
    backgroundColor: '#2196F3',
    borderRadius: 50,
    padding: 10,
  },
  //#endregion

  //#region Main Page (Characters)
  iconButton : {
    width: 44,
    height: 44,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  //#endregion
  
  //#region Character Creation 
  fieldContainer : {
    display: 'flex',
    gap: 10,

    marginBottom: 10,
  },
  fieldHeader: {
    color: '#d8d4cf',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3e4446',
    padding: 10,
    borderRadius: 5,

    color: '#d8d4cf',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#3e4446',
    borderRadius: 5,

    color: '#d8d4cf'
  },
  picker: {
    backgroundColor: 'transparent',
    padding: 10,

    borderWidth: 0,
    borderColor: '#3e4446',
    borderRadius: 5,

    color: '#d8d4cf',    
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterInput: {
    flex: 1,

    borderWidth: 1,
    borderColor: '#3e4446',
    padding: 10,
    borderRadius: 5,

    color: '#d8d4cf',    
  },
  counterButtonsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  counterButtons: {
    width: 36,
    height: 36,
    backgroundColor: '#35393b',
    padding: 10,
    margin: 5,
    borderRadius: 50,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  statsContainer : {
    display: 'flex',
    paddingRight: 10,
    paddingLeft: 10,

    gap: 5,
  },
  statContainer : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    maxWidth: 500,
  },
  statTitle : {
    color: '#cdc8c2',
  },
  statDetailsContainer : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue : {
    width: 125,

    borderWidth: 1,
    borderColor: '#3e4446',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 5,

    color: '#d8d4cf',
  },
  statDetailsButtonsContainer : {
    flexDirection: 'row',
    marginLeft: 5,
  },
  statDetailsButtons : {
    width: 24,
    height: 24,
    backgroundColor: '#35393b',
    padding: 5,
    margin: 3,
    borderRadius: 50,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  proficienciesContainer : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },
  proficiencyButton : {

  },
  addButtonContainer: {
    display: 'flex',
    alignItems: 'center',

    margin: 10,
  },
  addButton: {
    width: '50%',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
  //#endregion

  customFieldContainer: {
    display: 'flex',
    marginVertical: 20,
  },  

});

export default styles;