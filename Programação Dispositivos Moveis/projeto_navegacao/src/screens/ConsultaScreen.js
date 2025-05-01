import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConsultaScreen() {
  const consultar = () => {
    alert('Consulta realizada (dados fictícios).');
  };

  return (
    <View style={styles.container}>
      <Button title="Consultar" onPress={consultar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 22, marginBottom: 20 }
});
