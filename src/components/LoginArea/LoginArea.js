import React from 'react';
import './LoginArea.css'
import image from '../LoginArea/imagens/ilustracao.svg'


export default function loginArea() {
  return (
    <div>
      <h1>Seja bem-vindo!</h1> <br></br>
      <p> Antes de tudo, efetue seu login. <br></br>
      Caso você ainda não possua um cadastro, pode criar um!</p>
      <img src={image} alt={"imagem"}></img>
    </div>
  )

}