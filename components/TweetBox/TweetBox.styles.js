import { StyleSheet } from "react-native";
import colors from '../../styles/variables'


const styles = StyleSheet.create({
    TweetBox: {
        marginBottom: 15,
        paddingLeft: 8,
        paddingRight: 8,
    },
    Input: {
        height: 45,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 5,
        padding: 8,
        backgroundColor: colors.white,
    },
    count: {
        marginTop: 10,
    },
    Button: {
        marginTop: 3,
        color: colors.primary,
    },
})

export default styles