import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Money from "./components/Money";
import InputData from "./components/ImputData";
import ListItem from "./components/ListItem";
import uuid from "react-native-uuid";

//import { nombre } from "./components/constantes";
// console.log(nombre); con esto lalmas a una función aparte dentro de otro fichero
// probar despues

export default function App() {
  const [mostrar, setMostrar] = useState(false);
  const [dinero, setDinero] = useState(0);

  const hoy = new Date(Date.now());

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
      setListaMovimientos([...ListaMovimientos, productData]);
    } else {
      const productData = {
        key: uuid.v4(),
        tipo: type,
        dineroInpo: dineroInport,
        descripcion: descripcion,
        hora: hora,
      };

      setDinero(dinero - dineroInport);
      setListaMovimientos([...ListaMovimientos, productData]);
    }
    setMostrar(false);
  };

  const removeTransactHandler = (Id) => {
    let MovimientoEliminar = ListaMovimientos.find(
      (transacion) => transacion.key === Id
    );

    if (MovimientoEliminar.tipo == "Ingreso") {
      setDinero(parseInt(dinero) - parseInt(MovimientoEliminar.dineroInpo));
    } else {
      setDinero(parseInt(dinero) + parseInt(MovimientoEliminar.dineroInpo));
    }

    setListaMovimientos(() =>
      ListaMovimientos.filter((Movimiento) => Movimiento.key !== Id)
    );
  };

  return (
    <View style={styles.container}>
      <Money DineroActual={dinero} />

      <View style={styles.ListTransac}>
        {!ListaMovimientos.length ? (
          <Text>No hay Transaciones actualmente </Text>
        ) : (
          <FlatList
            data={ListaMovimientos}
            renderItem={(prodata) => {
              const { key, tipo, dineroInpo, descripcion, hora } = prodata.item;
              // console.log(key, tipo, dineroInpo, descripcion, hora);
              return (
                <ListItem
                  key={key}
                  id={key}
                  tipo={tipo}
                  dineroInpo={dineroInpo}
                  descripcion={descripcion}
                  hora={hora}
                  onTransacRemove={removeTransactHandler}
                />
              );
            }}
          />
        )}
      </View>

      <View style={styles.boton}>
        <Text
          style={styles.textBoton}
          onPress={() => {
            setMostrar(true);
          }}
        >
          +
        </Text>
      </View>

      <InputData mostrar={mostrar} agregarPrecio={agregarPrecio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6f74dd",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  ListTransac: {
    marginTop: 15,
    marginBottom: 20,
    width: 500,
    height: 650,
    alignItems: "center",
    borderColor: "10px solid pink",
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    position: "absolute",
    bottom: 50,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: "white",
    color: "black",
    borderRadius: 20,
  },
  textBoton: {
    fontSize: 25,
    color: "#6f74dd",
  },
  imputTransac: {
    flex: 1,
    color: "black",
  },
  imputText: {
    flex: 1,
    color: "black",
    width: 100,
    height: 50,
  },
});
