import { Pressable, StyleSheet, Text, View } from 'react-native';

const ListItem = ({ id, tipo, dineroInpo, descripcion, hora , onTransacRemove}) => {

    return (
        <View style={styles.listItem}>
            <Pressable style={{flexDirection: "row", alignItems: "center"}} onPress={() => onTransacRemove(id) } >
            <View >   
                <Text style={styles.textType} >{tipo} Cantidad : {dineroInpo}</Text>   
                <Text style={styles.textType} >{descripcion}</Text>
                <Text style={styles.textType} >{hora}</Text>
            </View>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1, 
        marginTop: 10, 
        backgroundColor: "#3949ab",
        flexDirection: 'row',
        textAlign: 'center',        
        width: 310,
        height: 100,
    },
    textType:{
        margin: 5,
        flex: 1,        
        color: "white",
        fontSize: 15,
        alignContent: 'center'
    },

});

export default ListItem;