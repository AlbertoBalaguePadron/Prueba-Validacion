import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import Money from "./components/Money";

export default function App() {
  const [dinero, setDinero] = useState("0");
  const [mostrar, setMostrar] = useState(false);

  
  const changeTextHandler = (value) => {
    setDinero(value);
}

  return (
    <View style={styles.container}>
      <Money DineroActual={dinero} />
      <Text>Posición Lista </Text>

      <Text
        style={styles.boton}
        onPress={() => {
          setMostrar(!mostrar);
        }}
      >
        +
      </Text>

      <Modal visible={mostrar} animationType={"fade"} transparent={false}>

      <TextInput style={ styles.imputTransac } 
                pla ceholder='Introduzca la transación' 
                keyboardType="numeric"
                onChangeText={ changeTextHandler } 
                value={ dinero }/>

        <Button
          title="Cerrar"
          onPress={() => {
            setMostrar(false);
          }}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6f74dd",
    alignItems: "center",
    justifyContent: "center",
  },
  modalbody: {
    backgroundColor: "#6f74dd",
    color: "white,",
    width: "70%",
    height: 30,
    marginTop: 20,
  },
  boton: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    marginBottom: 10, 
    bottom: 50,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: "white",
    color: "black",
    borderRadius: 20,
  },
  imputTransac:{
    flex: 4,
    color: 'black'
  },
});
