import { useState } from "react";
import {  Button, StyleSheet, Modal, Text, TextInput, View } from "react-native";

import SelectDropdown from "react-native-select-dropdown";

const InputData = ({mostrar, agregarPrecio}) => {

  const dataDesplegable = ["Ingreso", "Pago o extracción"];;
  const [precio, setPrecio] = useState('');
  const [type, setType] = useState('');


    const changeTextHandler = (value) => {
      setPrecio(value);
    }

    const changeType = (value) => {
      setType(value);
  }


    const addProductHandler = () => {
        agregarPrecio(precio, type)
        setPrecio("");
      }



    return (

      <Modal visible={mostrar} animationType={"fade"} transparent={false}>

        <View style={styles.modalbody}>

          <Text style={styles.imputText}>
            Introduzca la cantidad de la transación y seleccione el modo.
          </Text>

          <TextInput
            style={styles.imputText}
            placeholder='Introduzca una cantidad'
            keyboardType="numeric"
            onChangeText={changeTextHandler}
            value={precio}
          />

          <SelectDropdown
            data={dataDesplegable}
            onSelect={(selectedItem, index ) => {
              changeType(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              return item;
            }}
            value={type}
          />

          
        <Button style={ styles.addButton } title="Añadir" onPress={addProductHandler} /> 
        </View>
      </Modal>
)}


const styles = StyleSheet.create({
     imputTransac: {
        flex: 4,
        color: "black",
      },
});

export default InputData; 