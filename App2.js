import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';
import Home from './src/home';
import Users from './src/users';
import { Header } from 'react-native/Libraries/NewAppScreen';
import LogoTitle from './src/utils/logoTitle';



const Stack = createStackNavigator();
const defaultHeader = {
  headerTintColor:"white",
  headerTitleAlign:'center',
  headerBackTitle: "BackBackBack",
  headerBackImage: LogoTitle,
  headerStyle:{
    backgroundColor:"red",
    borderWidth: 5,
    borderBottomColor: "black",
    // color:"white", this doesn't work in header
  
  },
  headerTitle: props=>LogoTitle(props),
  //  you have to use this (read the docs https://reactnavigation.org/docs/headers) for more options
  headerTitleStyle:{
    fontWeight:'bold',
    fontStyle: "italic",
    textDecorationLine:'line-through',
}}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        ...defaultHeader
      }}
      >

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
        name="Users" 
        options={ ({navigation})=>(
          {
            headerLeft:()=> <Button
            title="go back"
            onPress={()=> navigation.navigate('Home')}
          />,
          })}
        component={Users} 
        initialParams={{id:1,codeName:"Pitboss"}}
        //this is used to pass params that might not be there yet...
        />
      </Stack.Navigator>
      <LogoTitle/>
    </NavigationContainer>
  );
}


export default App;