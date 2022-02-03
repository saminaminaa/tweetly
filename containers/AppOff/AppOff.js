import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import {Text} from 'react-native-elements'
import styles from "./AppOff.styles";

import tweets from "../../constants/tweet";
import Tweet from "../../components/Tweet";
import TweetBox from "../../components/TweetBox";
import format from "date-fns/format";
import {uniqueId} from 'lodash'


class App extends Component {
  state = { tweets };

  _updateTweets = (newTweet) => {
    //sans accolade = ça return direct ce qu'il y a apres
    this.setState({
      tweets: [
        {
          _id: uniqueId(),
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
        <Text style={styles.Titre} h3>Tweetly</Text>
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
