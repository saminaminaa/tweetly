import React, {Component} from "react";
import { View, Text, TextInput, Button, Keyboard } from 'react-native';
// import TweetBox from ".";

import styles from './TweetBox.styles';
import colors from "../../styles/variables";

class TweetBox extends Component{
    state = {
        value:"",
    }

    _handleChangeState = value => this.setState({value})
    //"_" à mettre au debut des methodes privés

    _submitNewTweet = () => {
        const { value } = this.state;
        const { addTweet } = this.props;

        if(value.length > 0) {
            addTweet(value)
        }

        this._handleChangeState('');
        Keyboard.dismiss();
    }


    render(){
        const {value} = this.state;
        return(
            <View style={styles.TweetBox}>
                <Text style={styles.count}>{value.length} / 140</Text>
                <TextInput
                    style={styles.Input}
                    maxLength={140}
                    numberOfLines={4}
                    onChangeText={this._handleChangeState}
                    value={value}
                    editable
                    multiline
                />
                <Button
                    onPress={this._submitNewTweet}
                    title="Ajouter un nouveau tweet"
                    color={colors.primary}
                    style={styles.Button}
                />
            </View>
        )
    }
}

export default TweetBox