import { StyleSheet } from "react-native";

import colors from '../../styles/variables'

const styles = StyleSheet.create({
    Test:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.darkblue,
    },
    Text: {
        color: colors.white,
        textAlign: 'center',
    },
})

export default styles