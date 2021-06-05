import React, {useState} from 'react'
import ilustracao from '../../Assets/ilustracao.svg'
import logo from '../../Assets/Logo.svg'
import './Index.css'



export default function Index() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  function handleChange({target}) {
      const {id, value } = target;
      setForm({...form, [id]: value}) 
  } 

 async function userSubmit(e) {
    e.preventDefault();
    try {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
      }) 
      const result = await response.json() 
      console.log(result)
    } catch (error) {
      console.log(error)
    }
   }
//Dúvidas pra perguntar no co-learing
//Como acessar uma constante dentro de uma função no react
//Como exportar uma função dentro de um componente.

  return (
    <div className="body">
      <div class="container">
        <div class="row">
          <div class="col-7">
            <h1>Seja bem-vindo!</h1> <br />
            <p> Antes de tudo, efetue seu login. <br />
             Caso você ainda não possua um cadastro, pode criar um!
         </p>
            <img class="ilustra" src={ilustracao} alt="Illustração" />
          </div>
          <div class="col-5 mw-100 div-form box-form">
            <div class="form">
              <div className="cadastro">
                <span>Cadastro</span>
                <span>Login</span>
              </div>
              <form onSubmit={userSubmit}>
                <div class="row">
                  <div class="col">
                    <small id="passwordHelpBlock" class="form-text text-muted descricao">Nome</small>
                    <input type="text" id="nome" name="nome" class="form-control" placeholder="Nome" value={form.nome} onChange={handleChange} />
                  </div>
                  <div class="col">
                    <small id="passwordHelpBlock" class="form-text text-muted">Sobrenome</small>
                    <input type="text" id="sobrenome" name="sobrenome" class="form-control input-menor" placeholder="Sobrenome" value={form.sobrenome}onChange={handleChange} />
                  </div>
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Endereço de e-mail</small>
                  <input type="email" id="email" name="email" class="form-control" placeholder="E-mail" aria-describedby="passwordHelpBlock" value={form.email} onChange={handleChange} />
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Senha</small>
                  <input type="password" name="senha" id="senha" class="form-control" placeholder="Senha" aria-describedby="passwordHelpBlock" value={form.senha} onChange={handleChange} />
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Confirmar senha</small>
                  <input type="password" id="confirmarSenha" name="confirmarSenha" class="form-control" placeholder=" Confirmar senha" aria-describedby="passwordHelpBlock" value={form.confirmarSenha} onChange={handleChange} />
                  <div className="buttons">
                    {/* {form.nome} */}
                    <button class="btn btn-warning btn-create">Criar nova conta</button>
                    <button class="btn btn-warning btn-account" text-decoration='none'><a href="/login">Já tenho conta</a>
                    </button>
                    <img src={logo} alt="logo do site" class="logo"></img>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}