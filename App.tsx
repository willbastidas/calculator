import {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { themeContext } from './contes/ThemeContest';
import { colores } from './styles/colors';
import Button from './components/Buton';
import Mykeyboard from './components/myKeyboard';

export default function App() {
  const [theme, setTheme] =useState('light');
  return ( 
    //  eltheme,proiver es para proveer una caracteristica a todo el view 
    < themeContext.Provider value ={theme} >
  <>
   <SafeAreaView style={theme === 'light' ? styles.container2 : [styles.container2, {backgroundColor: 'black'}]}>
    {/* este switch se le agregara la funcion de cambiar de color */}
    <Switch 
        value={theme === 'dark'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      /> 
    </SafeAreaView>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}> 
      <Mykeyboard/>
    </SafeAreaView>
    </>
    </themeContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container2: {
    padding:30,
    backgroundColor: colores.light,
    alignItems: 'center',
  }
});
