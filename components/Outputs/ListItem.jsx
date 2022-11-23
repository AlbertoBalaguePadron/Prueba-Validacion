import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from "../../themes/colors";
const ListItem = ({ id, tipo, dineroInpo, descripcion, hora , onTransacRemove}) => {

    return (
        <View style={styles.listItem}>
            <View >   
                
                <Text style={styles.textType} >{tipo} Cantidad : {dineroInpo}</Text>   
                
                <Text style={styles.textType} >{descripcion}</Text>
                
                <Text style={styles.textType} >{hora}</Text>  

                <Pressable style={{flexDirection: "row", alignItems: "center", width: 100,}} onPress={() => onTransacRemove(id) } >
                    <Text style={styles.textTypeDelete} >
                        Eliminar
                    </Text>
                </Pressable>
                <Pressable style={{flexDirection: "row", alignItems: "center", width: 100,}} onPress={() => onTransacModified(id) } >
                    <Text style={styles.textType} >
                        Modificar
                    </Text>
                </Pressable>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1, 
        marginTop: 10, 
        backgroundColor: colors.normal.Target,
        flexDirection: 'row',
        textAlign: 'center',        
        width: 310,
        height: 130,
    },
    textType:{
        marginTop: 5,
        marginLeft: 10,
        flex: 1,        
        color: colors.normal.white,
        fontSize: 15,
        alignContent: 'center'
    },
    textTypeDelete:{
        marginTop: 5, 
        marginBottom: 10, 
        marginLeft: 10, 
        flex: 1,        
        color: colors.normal.red,
        fontSize: 15,
        textAlign: "center",
    },

});

export default ListItem;