import { useState } from "react";
import {  Button, StyleSheet, Modal, Text, TextInput, View } from "react-native";

import SelectDropdown from "react-native-select-dropdown";

const InputData = ({mostrar, agregarPrecio}) => {

  const dataDesplegable = ["Ingreso", "Pago o extracción"];
  const [precio, setPrecio] = useState('');
  const [type, setType] = useState('');
  const [hora, sethora] = useState('');
  const [descripcion, setdescripcion] = useState('');
  

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
      } 
    }

    return (

      <Modal visible={mostrar} animationType={"fade"} transparent={false}>
        <View style={styles.modalbody}>

          <Text style={styles.imputTransac}>
            Introduzca la cantidad de la transación y seleccione el modo.
          </Text>

          <TextInput
            style={styles.imputTransac}
            placeholder='Introduzca una cantidad'
            keyboardType="numeric"
            onChangeText={changeTextHandler}
            value={precio}
          />

          <TextInput
            style={styles.imputTransac}
            placeholder='Introduzca una descripción'
            keyboardType="default"
            onChangeText={changedescriptionhandler}
            value={descripcion}
          />


          <TextInput
            style={styles.imputTransac}
            placeholder='Introduzca una fecha'
            keyboardType="default"
            onChangeText={changetimehandler}
            value={hora}
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
        color: "black",
      },
});

export default InputData; 