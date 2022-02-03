// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import App from './containers/App/App'

// import Expo from 'expo';
// import * as Expo from 'expo'
import React from "react";
import { Text, View, Image } from 'react-native';
// import {AppOff} from './containers/AppOff/AppOff'
import styles from './containers/AppOff/AppOff.styles';

import tweets from './constants/tweet'
import Tweet from "./components/Tweet";

const App = () => (
    <View style={styles.App}>
        {tweets.map((props, index) => (
            <Tweet
            key={index} {...props}
            />
        ))}
        {/* <AppOff/> */}
    </View>
)

export default App;
// Expo.registerRootComponent(AppOff);
