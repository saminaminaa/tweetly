import { StyleSheet } from "react-native";

import colors from './variables'

const styles = StyleSheet.create({
    Main:{
        flex: 1,
    },
    Tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        borderTopWidth: 1,
        borderColor: '#DDD',
    },
    Tab: {
        padding: 8,
        marginLeft: 8,
        marginRight: 8,
    }
})

export default styles