import { StyleSheet } from "react-native";
import Tweet from "../../components/Tweet";

import colors from '../../styles/variables'

const styles = StyleSheet.create({
    App: {
        flex: 1,//signifie que cv prendre tte la largeur dispo
        backgroundColor: colors.lightblue,
        justifyContent: 'center',
        paddingTop: 45,
    },
    Titre: {
        textAlign: "center",
    },
    img: {
        width: 50,
        height: 50,
    },
})

export default styles