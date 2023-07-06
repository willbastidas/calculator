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
    // eltheme,proiver es para proveer una caracteristica a todo el view
    < themeContext.Provider value ={theme} >
    {/* para cambiar el estilo o el tema (theme) dentro del view se le agrega un estilo para se puede cambiar utilizando un switch para realizar el cambio  */}
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}> 
      <StatusBar style="auto" />
      {/* este switch se le agregara la funcion de cambiar de color */}
      <Switch 
        value ={theme === 'light'} 
        onValueChange={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <Mykeyboard/>
    </SafeAreaView>
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
});
