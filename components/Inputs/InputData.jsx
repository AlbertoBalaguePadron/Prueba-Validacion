import { useState } from "react";
import {  Button, StyleSheet, Modal, Text, TextInput, View } from "react-native";
import { colors } from "../../themes/colors"

import SelectDropdown from "react-native-select-dropdown";

const InputData = ({mostrar, agregarPrecio}) => {

  const dataDesplegable = ["Ingreso", "Pago o extracción"];
  const [type, setType] = useState('');

  const [precio, setPrecio] = useState('');
  const [descripcion, setdescripcion] = useState('');
  const [hora, sethora] = useState('');
  

    const changeTextHandler = (value) => {
      setPrecio(value);
    }

    const changeType = (value) => {
      setType(value);
  }

  const changedescriptionhandler = (value) => {
    setdescripcion(value);
  }

  const changetimehandler = (value) => {
    sethora(value);
  }

    const addProductHandler = () => {
      if (precio != "" && type != "" && descripcion != "" ){
        if(hora == ""){
          const hoy = new Date(Date.now());

          sethora(hoy.toUTCString());
          agregarPrecio(precio, type, descripcion, hoy.toUTCString() );
        } else {
          agregarPrecio(precio, type, descripcion, hora );
        }
        setPrecio("");
        setdescripcion("");
        sethora("");
        changeType("");
      } 
    }
    
    return (

      <Modal visible={mostrar} animationType={"fade"} transparent={false}>
        <View style={styles.modalbody}>

          <Text style={styles.inputTextModal}>
            Introduzca la cantidad de la transación Introduce una pequeña descripcion, introduzca la hora y seleccione el tipo de transacción.
          </Text>

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



          <TextInput
            style={styles.inputTextModal}
            placeholder='Introduzca una cantidad:'
            keyboardType="numeric"
            onChangeText={changeTextHandler}
            value={precio}
          />

          <TextInput
            style={styles.inputTextModal}
            placeholder='Introduzca una descripción:'
            keyboardType="default"
            onChangeText={changedescriptionhandler}
            value={descripcion}
          />


          <TextInput
            style={styles.inputTextModal}
            placeholder='Introduzca una fecha:'
            keyboardType="default"
            onChangeText={changetimehandler}
            value={hora}
          />

        
        <Button style={ styles.addButton } title="Añadir" onPress={addProductHandler} /> 

        </View>
      </Modal>
)}


const styles = StyleSheet.create({
  modalbody:{
    flex: 1,
    padding: 20, 
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: colors.normal.InputData,
  },
  inputTextModal: {
    marginTop: 5, 
    marginBottom: 5,
    color: colors.normal.black,
  },
  addButton: {
    marginTop: 10, 
  },

});

export default InputData; 