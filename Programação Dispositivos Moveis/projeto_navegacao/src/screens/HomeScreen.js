import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.espacamento}>
        <Button  title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} color="#640ba7" />
      </View>

      <Button title="Ir para Consulta" onPress={() => navigation.navigate('Consulta')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 20, marginBottom: 30 },
  espacamento: { marginBottom: 15}
});
