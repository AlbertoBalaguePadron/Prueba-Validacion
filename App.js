import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Money from "./components/Money";
import InputData from "./components/ImputData";
import uuid from "react-native-uuid";

export default function App() {
  const [mostrar, setMostrar] = useState(false);
  const [dinero, setDinero] = useState(0);
  const [type, setType] = useState("");

  const [tranfer, setTransfer] = useState([...productosIniciales]);

  const productosIniciales = [
    { key: "1", tipo: "Ingreso", dineroImpor: "200" },
  ];

  const agregarPrecio = (precio, type) => {
    if (type === "Ingreso") {
      const productData = {
        key: uuid.v4(),
        tipo: type,
        dineroImpor: dinero + precio,
      };
      console.log("Ingreso => " + productData.dineroImpor);
    } else {
      const productData = {
        key: uuid.v4(),
        tipo: type,
        dineroImpor: dinero - precio,
      };
      console.log("pago=> " + productData.dineroImpor);
    }
    //   setProducts(() => [...tranfer, productData]);
    setMostrar(false);
  };

  return (
    <View style={styles.container}>
      <Money DineroActual={dinero} />
      <Text>Posición Lista </Text>

      <Text
        style={styles.boton}
        onPress={() => {
          setMostrar(true);
        }}
      >
        +
      </Text>

      <InputData mostrar={mostrar} agregarPrecio={agregarPrecio} />
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
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#6f74dd",
    backgroundColor: "#6f74dd",
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    flexDirection: "column",
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
  imputTransac: {
    flex: 1,
    color: "black",
  },
  imputText: {
    flex: 1,
    color: "black",
    backgroundColor: "pink",
    width: 100,
    height: 50,
  },
});
