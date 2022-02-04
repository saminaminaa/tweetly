import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import styles from "./AppOff.styles";

// import tweets from "../../constants/tweet";
import Tweet from "../../components/Tweet";
import TweetBox from "../../components/TweetBox";
import format from "date-fns/format";
import { uniqueId } from "lodash";
import { getAllTweets, setTweet } from "../../helper/storage";

class App extends Component {
  state = { tweets: [] };

  UNSAFE_componentWillMount() {
    //componentWillMount S'execute avant que le composant existe
    this._getAllTweets();
  }

  _getAllTweets = async () => {
    const tweets = await getAllTweets();

    this.setState({ tweets });
  };

  _updateTweets = async (newTweet) => {
    //si commence par "_" = methode qui est interne à la classe
    //sans accolade = ça return direct ce qu'il y a apres
    await this.setState({ //await pour attendre que le state soit correctement mis à jour pr pouvoir recup le contenu de tweets
      tweets: [
        {
          _id: uniqueId(),
          date: format(new Date(), "dd/MM/yyyy"),
          username: "Noémie",
          tweet: newTweet,
          avatar: "https://picsum.photos/50/50",
        },
        ...this.state.tweets,
      ],
    });
    setTweet(this.state.tweets);
  };

  render() {
    const { tweets } = this.state;

    return (
      <View style={styles.App}>{console.log(tweets)}
        <Text style={styles.Titre} h3>
          Tweetly
        </Text>
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
