// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import App from './containers/App/App'

// import Expo from 'expo';
// import * as Expo from 'expo'
import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
// import {AppOff} from './containers/AppOff/AppOff'
import styles from "./containers/AppOff/AppOff.styles";

import tweets from "./constants/tweet";
import Tweet from "./components/Tweet";
import TweetBox from "./components/TweetBox";
import format from "date-fns/format";
// import { v4 as uuidv4 } from "uuid";
// import uniqid from 'uniqid';

// const App = () => (
//     <View style={styles.App}>
//         <TweetBox/>
//         {tweets.map((props, index) => (
//             <Tweet
//             key={index} {...props}
//             />
//         ))}
//         {/* <AppOff/> */}
//     </View>
// )

class App extends Component {
  state = { tweets };

  _updateTweets = (newTweet) => {
    //sans accolade = ça return direct ce qu'il y a apres
    // var uniqid = require('uniqid'); 
    this.setState({
      tweets: [
        {
          _id: 6,
          date: format(new Date(), 'dd/MM/yyyy'),
          username: "Noémie",
          tweet: newTweet,
          avatar: "https://picsum.photos/50/50",
        },
        ...this.state.tweets,
      ],
    });
  };

  render() {
    const { tweets } = this.state;

    return (
      <View style={styles.App}>
        <TweetBox addTweet={this._updateTweets} />
        <ScrollView>
          {tweets.map((props, index) => (
            <Tweet key={index} {...props} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default App;
// Expo.registerRootComponent(AppOff);
