import Expo from 'expo'
import React, {Component} from 'react'
import {View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles/App.styles'
import {Icon} from 'react-native-elements'
import AppOff from './containers/AppOff'
import Test from './containers/Test'

class Main extends Component{
    state = {
        currentTab: 'AppOff'
    }

    _changeTab = tabName => this.setState({currentTab: tabName})

    _renderTab = () => {
        const {currentTab} = this.state;

        switch(currentTab) {
            case 'AppOff': //si c egal à app alors...
                return <AppOff/>
            case 'Test':
                return <Test/>
            default:
                return <AppOff/>
        }
    }

    render(){
        const current = this._renderTab()
        return(
            <View style={styles.Main}>
                {current}
                <View style={styles.Tabs}>
                    <TouchableWithoutFeedback onPress={() => this._changeTab('AppOff') /* pour utiliser une methode avc des parametres, utiliser la syntaxe "() => nommethode" */}>
                        <View style={styles.Tab}>
                            <Text>
                                <Icon
                                    name='twitter'
                                    type='ant-design'
                                />
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._changeTab('Test')}>
                        <View style={styles.Tab}>
                            <Text>
                                <Icon
                                    name='search'
                                    type='feather'
                                />
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._changeTab('Test')}>
                        <View style={styles.Tab}>
                            <Text>
                                <Icon
                                    name='bell'
                                    type='fontisto'
                                />
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this._changeTab('Test')}>
                        <View style={styles.Tab}>
                            <Text>
                                <Icon
                                    name='mail'
                                    type='feather'
                                />
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

// Expo.registerRootComponent(Main)
export default Main;
