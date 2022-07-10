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