import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import estilos from "./estilos";
import { criarRepositoriosDoUsuario } from "../../servicos/requisicoes/repositorios";

export default function CriarRepositorio({ route, navigation }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");

  async function criar() {
    const resultado = await criarRepositoriosDoUsuario({
      postId: route.params.id,
      nome,
      data,
    });
    console.log(resultado);
    if (resultado === "Repositório Criado") {
      Alert.alert(resultado);
      navigation.goBack();
    } else {
      Alert.alert("Erro ao criar o repositório!");
    }
  }

  async function criar() {
    const resultado = await criarRepositoriosDoUsuario({
      postId: route.params.id,
      nome,
      data,
    });
    console.log(resultado);
    if (resultado === "Repositório Criado") {
      Alert.alert(resultado);
      navigation.goBack();
    } else {
      Alert.alert("Erro ao criar o repositório!");
    }
  }

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity onPress={() => criar()} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
