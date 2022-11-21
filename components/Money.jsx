import { StyleSheet, Text, View } from "react-native";

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
        backgroundColor: "#00227b",
        width: '90%',
        height: 90,
        borderRadius: 5,
        marginTop: 40,
    },
    Positivo: {
        color: 'white',
    },  
    Negativo: {
        color: 'red',
    },
});

export default Money; 