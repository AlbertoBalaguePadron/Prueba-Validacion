import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Money from "./components/Money";
import InputData from "./components/ImputData";
import uuid from "react-native-uuid";

export default function App() {
  const [mostrar, setMostrar] = useState(false);
  const [dinero, setDinero] = useState(0);
  const [ListaMovimientos, setListaMovimientos] = useState([]);

  const agregarPrecio = (dineroInport, type, descripcion, hora) => {
    if (type === "Ingreso") {
      const productData = {
        key: uuid.v4(),
        tipo: type,
        dineroInpo: dineroInport,
        descripcion: descripcion,
        hora: hora,
      };
      if (dinero == 0) {
        setDinero(dineroInport);
      } else {
        setDinero(parseInt(dinero) + parseInt(dineroInport));
      }
      setListaMovimientos(() => [...ListaMovimientos, productData]);
    } else {
      const productData = {
        key: uuid.v4(),
        tipo: type,
        dineroInpo: dineroInport,
        descripcion: descripcion,
        hora: hora,
      };

      setDinero(dinero - dineroInport);
      setListaMovimientos(() => [...ListaMovimientos, productData]);
    }
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
