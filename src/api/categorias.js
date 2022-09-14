import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get("https://livraria-gustavorudolf.herokuapp.com/categorias");
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(`https://livraria-gustavorudolf.herokuapp.com/categorias/${id}`);
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post(
      "https://livraria-gustavorudolf.herokuapp.com/categorias",
      categoria
    );
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://livraria-gustavorudolf.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(
      `https://livraria-gustavorudolf.herokuapp.com/categorias/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
