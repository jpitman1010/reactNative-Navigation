import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, Button, ListViewBase } from 'react-native';
import Home from './src/home';
import Users from './src/users';
import { Header } from 'react-native/Libraries/NewAppScreen';
import LogoTitle from './src/utils/logoTitle';
import CustomDrawerContent from './src/utils/customdrawer'


//https://reactnavigation.org/docs/drawer-navigator/

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator 
       drawerContent={
        (props)=> <CustomDrawerContent {...props}/>
       }
       openByDefault={true}
       initialRouteName="Home" 
      
       
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Users" component={Users} 
        initialParams={{id:1,codeName:"Pitboss"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;