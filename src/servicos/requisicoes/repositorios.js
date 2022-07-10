import api from '../../servicos/api';

export async function pegarRepositorios (id){
  try {
    const resultado = await api.get(`/repos?postId=${id}`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return []
  }
}

export async function salvarRepositoriosDoUsuario (postId, nome, data, id){
  try {
    const resultado = await api.put(`/repos/${id}`, {
      name: nome,
      data: data,
      postId: postId,
      id: id
    });
    return 'sucesso';
  } catch (error) {
    console.log(error);
    return 'erro'
  }
}

export async function criarRepositoriosDoUsuario ({nome,data, postId}){
  try {
    const resultado = await api.post(`/repos`, {
      name: nome,
      data: data,
      postId: postId,
    });
    return 'Repositório Criado';
  } catch (error) {
    console.log(error);
    return 'Erro ao criar repositório'
  }
}

export async function deletarRepositorios(id){
  try {
    await api.delete(`/repos/${id}`);
    return 'sucesso';
  } catch (error) {
    console.log(error);
    return 'erro'
  }
}