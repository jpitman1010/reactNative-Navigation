import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';

const Users = () => {
// const Users = (props) => {
    const navigation = useNavigation();
    const route = useRoute();

    const {id,codeName} = route.params;

    useEffect(()=>{
        setTimeout(()=>{
            navigation.setOptions({
               
                      headerRight:()=> <Button
                      title="go forward"
                      onPress={()=> alert('go forward')}
                    />,
            })
            },2000)
    },[navigation])

    return(
        <View style={{marginTop:50}}>
            <Text>ID: {id} </Text>
            <Text>Codename:{codeName} </Text>

            <Button 
            title="Go Back"
            onPress={ ()=> navigation.navigate('Home',{
            active:'yes'} )}
            />

            <Button
                title="change header"
                onPress={()=> navigation.setOptions({
                    title:'something else to call title'
                })}
            />

<Button 
            title="Side Drawer"
            // onPress={ ()=> navigation.toggleDrawer()}
            onPress={()=> navigation.openDrawer()}
            // onPress={()=> navigation.closeDrawer()}

            />
        </View>
    )
}

export default Users;