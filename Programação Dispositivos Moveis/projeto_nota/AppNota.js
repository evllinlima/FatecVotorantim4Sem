import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sexo: "Masculino",
      limite: 750,
      casado: false,
    };
  }

  //alerta funcionando somente no app (snack)
  abrirConta = () => {
    const { nome, sexo, limite, casado } = this.state;
    Alert.alert(
      "Alert",
      `Sua conta foi criada com sucesso:\nNome: ${nome}\nValor do Limite: ${limite.toFixed(
        3
      )}\nSexo: ${sexo}\nEstado Civil: ${casado ? "Casado" : "Solteiro"}`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "#000",
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Crie sua conta:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(nome) => this.setState({ nome })}
        />

        <Text style={styles.label}>Informe seu Sexo: </Text>
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
          style={styles.picker}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>

        <Text style={styles.label}>Escolha seu Limite: </Text>
        <Slider
          minimumValue={100}
          maximumValue={5000}
          step={0.001}
          value={this.state.limite}
          onValueChange={(limite) => this.setState({ limite })}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
          style={styles.slider}
        />
        <Text style={styles.limite}>{this.state.limite.toFixed(2)} R$</Text>

        <View style={styles.switchContainer}>
          <Switch
            value={this.state.casado}
            onValueChange={(casado) => this.setState({ casado })}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.casado ? "#f4f3f4" : "#f00"}
          />
        </View>

        <Text style={{ color: "#000", fontSize: 18, textAlign: "center" }}>
          Casado
        </Text>

        <Button title="CRIAR CONTA" onPress={this.abrirConta} color="#007bff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "#6666",
    borderWidth: 1,
    placeholder: "#6666",
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  slider: {
    width: "100%",
    marginTop: 10,
  },
  limite: {
    textAlign: "center",
    fontSize: 20,
  },
  switchContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginVertical: 10,
  },
});

export default App;
