import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, Button, ListViewBase } from 'react-native';
import Home from './src/home';
import Users from './src/users';
import { Header } from 'react-native/Libraries/NewAppScreen';
import LogoTitle from './src/utils/logoTitle';
//https://reactnavigation.org/docs/drawer-navigator/

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator 
       openByDefault={true}
       initialRouteName="Home" 
       drawerContentOptions={{
       activeTintColor:"red",
       itemStyle:{marginTop:20}, //item wrapper
       labelStyle:{fontSize:30}}}
       
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Users" component={Users} 
        initialParams={{id:1,codeName:"Pitboss"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;