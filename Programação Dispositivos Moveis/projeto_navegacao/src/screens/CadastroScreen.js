import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const cadastrar = () => {
    alert(`Usuário cadastrado:\n${nome} - ${email} - ${senha}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar</Text>

      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Senha" style={styles.input} onChangeText={setSenha} secureTextEntry />

      <Button title="Cadastrar" onPress={cadastrar} color="#640ba7" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 22, marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 }
});
