import React from 'react';
import { Text, View, Button } from 'react-native';


const Users = (props) => {
    return(
        <View style={{marginTop:50}}>
            <Text>Users </Text>
            <Button 
            title="Go Home"
            onPress={ ()=> props.navigation.goBack() }
            />
        </View>
    )
}

export default Users;