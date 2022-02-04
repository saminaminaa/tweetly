import { AsyncStorage } from "react-native";

import tweets from "../constants/tweet";

const getAllTweets = async () => {//recup les tweets //ces 2 methodes sont asynchrones
    try{
        const value = await AsyncStorage.getItem('tweets')
        if(!value){
            return tweets
        } else {
            return JSON.parse(value)
        }
    } catch (err) {
        console.error('AsyncStorage Error', err)
    }
}
const setTweet = async allTweets => {//stocke un tweet dans l'asyncStorage
    try{
        // const oldTweets = await getAllTweets()
        // const tweets = [tweet, ...oldTweets]

        return AsyncStorage.setItem('tweets', JSON.stringify(allTweets)) //prend la clé puis la valeur
    } catch (err) {
        console.error('AsyncStorage Error', err);
    }
}

export {
    getAllTweets,
    setTweet,
}