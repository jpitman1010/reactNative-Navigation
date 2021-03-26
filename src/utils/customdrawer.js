import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
  


  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem 
        label="Contacts"
        onPress={()=> alert("contacts")}/>

      </DrawerContentScrollView>
    );
  } 

  export default CustomDrawerContent; 