import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";

const Money = ({DineroActual}) => {

    return (
        <View style={ styles.containerProcut }>
            <Text style={ DineroActual >= 0 ?  styles.Positivo : styles.Negativo }>{DineroActual}</Text>
        </View>
)}

const styles = StyleSheet.create({
    containerProcut: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.normal.Monedero,
        width: '90%',
        height: 90,
        borderRadius: 5,
        marginTop: 40,
    },
    Positivo: {
        color: colors.normal.white,
    },  
    Negativo: {
        color: colors.normal.red,
    },
});

export default Money; 