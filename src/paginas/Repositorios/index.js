import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { pegarRepositorios } from '../../servicos/requisicoes/repositorios';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);

    useEffect(()=>{
        async function busca(){
            const resultado = await pegarRepositorios(route.params.id)
            console.log(resultado)
            if(resultado) {
                setRepo(resultado)
            }else{
                return Alert.alert("Nenhum repositório encontrado!")
                setRepo([])
            }
        }
        busca()
    }, [])


    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
             <FlatList
                data={repo}
                style={{width: '100%'}}
                keyExtractor={repo => repo.id}      
                renderItem={({item})=>(
                    <TouchableOpacity 
                        style={estilos.repositorio}
                        onPress={()=> navigation.navigate('InfoRepositorio', {item})} 
                    >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                    </TouchableOpacity>
                )}      
             
             
             
             />
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio')}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>
        </View>
    );
}
