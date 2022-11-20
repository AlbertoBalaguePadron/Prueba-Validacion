import { StyleSheet, Text, View } from "react-native";

const Money = ({DineroActual}) => {


    return (
        <View style={ styles.containerProcut }>
            {

                DineroActual >= 0 ? (
                    <Text style={ styles.Positivo }>{DineroActual}</Text>
                ):(
                    <Text style={ styles.Negativo }>{DineroActual}</Text>
                )
                
            }
        </View>
)}


const styles = StyleSheet.create({
    containerProcut: {
        alignItems: 'center',
        backgroundColor: "#00227b",
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 30, 
        marginBottom: 30,
        width: '100%',
        radius: 1000,
    },
    Positivo: {
        color: 'white',
    },  
    Negativo: {
        color: 'red',
    },
});

export default Money; 