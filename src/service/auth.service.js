import axios from 'axios';

const API_URL = 'http://localhost:5000/';

const register = (nome, sobrenome, email, senha) => {
  return axios.post(API_URL + '', {
    nome,
    sobrenome,
    email,
    senha
  });

}


const login = (email, senha) => {
  return axios.post(API_URL + '', {
    email,
    senha
  })
}

const logout = () => {

}