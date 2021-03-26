import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';

const Users = () => {
// const Users = (props) => {
    const navigation = useNavigation();
    const route = useRoute();

    const {id,codeName} = route.params;

    return(
        <View style={{marginTop:50}}>
            <Text>ID: {id} </Text>
            <Text>Codename:{codeName} </Text>

            <Button 
            title="Go Back"
            onPress={ ()=> navigation.navigate('Home',{
            active:'yes'} )}
            />
        </View>
    )
}

export default Users;