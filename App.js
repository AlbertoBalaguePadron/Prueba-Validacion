import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Money from "./components/Outputs/Money";
import InputData from "./components/Inputs/InputData";
import ListItem from "./components/Outputs/ListItem";
import { colors } from "./themes/colors";
import uuid from "react-native-uuid";

//import { nombre } from "./components/constantes";
// console.log(nombre); con esto lalmas a una función aparte dentro de otro fichero
// probar despues

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

  const removeTransactHandler = (id) => {
    let MovimientoEliminar = ListaMovimientos.find(
      (transacion) => transacion.key === id
    );

    if (MovimientoEliminar.tipo == "Ingreso") {
      setDinero(parseInt(dinero) - parseInt(MovimientoEliminar.dineroInpo));
    } else {
      setDinero(parseInt(dinero) + parseInt(MovimientoEliminar.dineroInpo));
    }

    setListaMovimientos(() =>
      ListaMovimientos.filter((Movimiento) => Movimiento.key !== id)
    );
  };

  const onTransacModified = (id) => {
    
    let MovimientoModificar = ListaMovimientos.find(
      (transacion) => transacion.key === id
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
              return (
                <ListItem
                  key={key}
                  id={key}
                  tipo={tipo}
                  dineroInpo={dineroInpo}
                  descripcion={descripcion}
                  hora={hora}
                  onTransacRemove={removeTransactHandler}
                  onTransacModified={onTransacModified}
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
    backgroundColor: colors.normal.primary,
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
  },
  modalbody: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.normal.secondary,
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
    backgroundColor: colors.normal.white,
    color: colors.normal.black,
    borderRadius: 20,
  },
  textBoton: {
    marginBottom: 3,
    fontSize: 25,
    color: colors.normal.primary,
  },
  imputTransac: {
    flex: 1,
    color: colors.normal.black,
  },
  imputText: {
    flex: 1,
    color: colors.normal.black,
    width: 100,
    height: 50,
  },
});
