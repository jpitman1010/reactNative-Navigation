import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native'

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>
          App screen
        </Text>
      </View>
    </NavigationContainer>
  );
};

export default App;