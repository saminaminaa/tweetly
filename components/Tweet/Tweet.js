import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./Tweet.styles";

const Tweet = ({ date, tweet, username, avatar }) => (
  <View style={styles.Tweet}>
    <View style={styles.left}>
      <Image source={{uri: avatar}} style={styles.avatar} />
    </View>
    <View style={styles.right}>
      <View style={styles.top}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.username}>@{username}</Text>
      </View>
      <View style={styles.bottom}>
          <Text style={styles.tweet}>{tweet}</Text>
      </View>
    </View>
  </View>
);

export default Tweet;
