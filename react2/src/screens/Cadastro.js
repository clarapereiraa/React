import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function Cadastro() {
    const [user, setUser] = useState({
      name: "",
      cpf: "",
      data_nascimento: "",
      email: "",
      password: "",
    });

    async function handleCadastro() {
        await api.postCadastro(user).then(
          (response) => {
            Alert.alert("OK", response.data.message);
          },
          (error) => {
            console.log("Error", error.response.data.error);
          }
        );
      }
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Faça Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={user.name}
        onChangeText={(value) => {
          setUser({ ...user, name: value });
        }}
        style={styles.input}
      />
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      />
       <TextInput
        placeholder="CPF"
        value={user.cpf}
        onChangeText={(value) => {
          setUser({ ...user, cpf: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Data de Nascimento"
        value={user.data_nascimento}
        onChangeText={(value) => {
          setUser({ ...user, data_nascimento: value });
        }}
        style={styles.input}
      />
       <TextInput
        placeholder="Senha"
        value={user.password}
        onChangeText={(value) => {
            setUser({ ...user, password: value });
          }}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleCadastro} style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      height: 40,
      borderBottomWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: "green",
      padding: 10,
      borderRadius: 5,
    },
  });
