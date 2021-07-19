import React, {useState} from 'react'
import ilustracao from '../../Assets/ilustracao.svg'
import logo from '../../Assets/Logo.svg'
import { useHistory } from "react-router-dom";
import './Index.css'

export default function Index() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  let history = useHistory();

  function handleChange({target}) {
      const {id, value } = target;
      setForm({...form, [id]: value}) 
  } 

 async function userSubmit(e) {
    e.preventDefault();
     const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
      })
   await response.json()
   history.push('/login');
    
 }


  return (
    <div className="body">
      <div className="container">
        <div className="row flex-wrap">
          <div className="col-7  welcome">
            <h1 className="title-mob title-tablet">Seja bem-vindo!</h1> <br />
            <p className="mobile-p p-tablet">
              Antes de tudo, efetue seu login. <br />
              Caso você ainda não possua um cadastro, pode criar um!
            </p>
            <img className="ilustra" src={ilustracao} alt="Illustração" />
          </div>
          <div className="col-4 mw-100 div-form div-res">
            <div>
              <div className="cadastro cad-mobile cad-tablet">
                <span className="cadastro cad-mobile cad-tablet">Cadastre-se</span>
                {/*<span>Login</span>*/}
              </div>
              <form onSubmit={userSubmit} autoComplete="off">
                <div className="row mob-row  tables-row">
                  <div className="col formulario">
                    <small id="passwordHelpBlock" className="descricao">
                      Nome
                    </small>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className="form-control input-nome"
                      placeholder="Nome"
                      value={form.nome}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <small id="passwordHelpBlock" className="descricao">
                      Sobrenome
                    </small>
                    <input
                      type="text"
                      id="sobrenome"
                      name="sobrenome"
                      className="form-control input-sobrenome"
                      placeholder="Sobrenome"
                      value={form.sobrenome}
                      onChange={handleChange}
                    />
                  </div>
                  <small id="passwordHelpBlock" className="form-text text-muted descricao">
                    Endereço de e-mail
                  </small>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control input-maior"
                    placeholder="E-mail"
                    aria-describedby="passwordHelpBlock"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <small id="passwordHelpBlock" className="form-text text-muted descricao">
                    Senha
                  </small>
                  <input
                    type="password"
                    name="senha"
                    id="senha"
                    className="form-control input-maior"
                    placeholder="Senha"
                    aria-describedby="passwordHelpBlock"
                    value={form.senha}
                    onChange={handleChange}
                  />
                  <small id="passwordHelpBlock" className="form-text text-muted descricao">
                    Confirmar senha
                  </small>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    className="form-control input-maior"
                    placeholder=" Confirmar senha"
                    aria-describedby="passwordHelpBlock"
                    value={form.confirmarSenha}
                    onChange={handleChange}
                  />
                  <div className="buttons">
                    <button type="submit" class="btn btn-warning btn-create">
                      Criar nova conta
                    </button>
                    <button type="text" class="btn btn-warning btn-create">
                      <a href="/login">Já tenho conta</a>
                    </button>
                  </div>

                  <div className="logo">
                    <img src={logo} alt="logo do site" className="logotipo logo-mob logo-tab" />
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