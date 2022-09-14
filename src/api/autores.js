import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("https://livraria-gustavorudolf.herokuapp.com/autores");
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(`https://livraria-gustavorudolf.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post("https://livraria-gustavorudolf.herokuapp.com/autores", autor);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livraria-gustavorudolf.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://livraria-gustavorudolf.herokuapp.com/autores/${autor.id}`,
      autor
    );
    return response.data;
  }
}
