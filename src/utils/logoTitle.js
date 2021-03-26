import React from 'react';
import { Text, View, Image } from 'react-native';

import Logo from "../images/facebook.png";


const LogoTitle = () => {
    return(
        // <Text>Hello</Text>
        <Image
            source={Logo}
            style = {{
            height:10,
            width:10,
            }}
        />
    )
}

export default LogoTitle;