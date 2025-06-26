import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,

    paddingTop: 20,
    backgroundColor: '#1e2021',   
  },
  tabsMenu: 
  {
    display: 'flex',
    flexDirection: 'row',
  },
  tabSectionContainer_Active: 
  {
    paddingTop: 5,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingBottom: 10,
    backgroundColor: '#1a1a1a',

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1a1a1a',
    
    //Top Bar
    //borderTopColor: '#da8466',

    marginRight: 10,
    marginLeft: 10,
    marginBottom: -10,
  },
  tabSectionName_Active: 
  {
    color: '#cbcbcb', //#e8e6e3
  },
  
  //#region Character Skills and Stats
  detailsBody: {
    display: 'flex',

    padding: 20,
    paddingTop: 15,

    borderColor: '#222222',
    
    gap: 20,
  },
  detailsSection: {
    display: 'flex',
  },
  mainStatsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    gap: 4,

    marginTop: 15,
  },
  mainStatContainer: {
    flexBasis: '16.6667%',
    flexShrink: 1,

    maxWidth: '16.6667%',
    minHeight: 70,

    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#444444',
  },
  mainStatBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainStatModifierContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 2,

    gap: 5,
  },
  mainStatText: {
    //fontFamily: 'Segoe UI',
    fontSize: 11.2,
    fontWeight: 'bold',
    color: '#aaaaaa',
    textTransform: 'uppercase',
  },
  mainStatModifierValue: {
    fontFamily: 'Montserrat', 
    fontSize: 20,
    color: '#cccccc',
  },
  mainStatValueContainer: {
    width: 36,
    height: 24.3,

    backgroundColor: '#1e2021',

    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#444444',

    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'Montserrat',
    fontSize: 21,

    position: 'absolute',
    bottom: -27.5,
  },
  mainStatValue: {
    //fontFamily: 'Segoe UI',
    fontSize: 14,
    color: '#cccccc',
  },
  secondaryStatsRow : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',

    gap: 4,

    marginTop: 15,
  },
  secondaryStatContainer: {
    flexGrow: 1,

    maxWidth: '100%',
    minHeight: 70,

    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#444444',
  },
  secondaryStatBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryStatModifier: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 2,
    marginBottom: 5,

    gap: 3,
  },
  secondaryStatText: {
    //fontFamily: 'Segoe UI',
    fontSize: 9.8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#aaaaaa',
  },
  secondaryStatModifierValue: {
    marginTop: 3,
    marginBottom: 3,

    fontFamily: 'Montserrat', 
    fontSize: 20,
    color: '#cccccc',
    
    textAlign: 'center',
  },
  proficienciesContainer: {
    display: 'flex',
  },
  proficiencyRow : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',

    marginRight: -20,
    marginLeft: -20,

    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 30 + 20,
    paddingLeft: 15 + 20,

    borderBottomWidth: 1,
    borderColor: '#444444',
  },
  proficiencyDetails : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 12,
  },
  proficiencyText : {
    //fontFamily: 'Segoe UI', 
    fontSize: 15,
    color: '#cccccc',
  },  
  proficiencyModifierBold : {
    fontFamily: 'Montserrat', 
    fontSize: 14,
    fontWeight: 'bold',
    color: '#cccccc',
  },
  proficiencyModifier : {
    fontFamily: 'Montserrat', 
    fontSize: 14,
    color: '#cccccc',
  },
  //#endregion
});

export default styles;