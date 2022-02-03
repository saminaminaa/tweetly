import { StyleSheet } from "react-native";
import colors from '../../styles/variables'


const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
    },
    Tweet: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: colors.blue,
        marginBottom: 4,
        padding: 4,
    },
    left: {
        // borderWidth: 2,
        // borderColor: 'red',
    },
    right: {
        flex: 1,
        paddingLeft: 8,
    },
    top: {
        flexDirection: 'row',
    },
    date: {
        marginRight: 10,
    },
    tweet: {
        fontWeight: 'bold',
    },
    username:{
        color: colors.primary,
    },
})

export default styles