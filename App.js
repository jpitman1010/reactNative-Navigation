import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Home from './src/home';
import Users from './src/users';
import { Header } from 'react-native/Libraries/NewAppScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
        name="Users" 
        options={{
          title:"xUsers", 
          headerStyle:{
            backgroundColor:"red",
            borderWidth: 5,
            borderBottomColor: "black",
            // color:"white", this doesn't work in header
          
          },
           headerTintColor:"white",
          //  you have to use this (read the docs https://reactnavigation.org/docs/headers) for more options
          headerTitleStyle:{
            fontWeight:'bold',
            fontStyle: "italic",
            textDecorationLine:'line-through'
          }
        }}
        component={Users} 
        initialParams={{id:1,codeName:"Pitboss"}}
        //this is used to pass params that might not be there yet...
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;