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
      const result = await response.json() 
      history.push('/login');
    
 }


  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-7 welcome">
            <h1>Seja bem-vindo!</h1> <br></br>
            <p>
              Antes de tudo, efetue seu login. <br></br>
              Caso você ainda não possua um cadastro, pode criar um!
            </p>
            <img className="ilustra" src={ilustracao} alt="Illustração"></img>
          </div>
          <div className="col-5  mw-100 div-form div-res">
            <div>
              <div className="cadastro">
                <span className="cadastro">Cadastre-se</span>
                {/*<span>Login</span>*/}
              </div>
              <form onSubmit={userSubmit} autoComplete="off">
              <div className="row res-row">
                  <div className="col formulario">
                    <small id="passwordHelpBlock" className="descricao">
                      Nome
                    </small>
                    <input type="text" id="nome" name="nome" className="form-control" placeholder="Nome" value={form.nome} onChange={handleChange} />
                    </div>
                  <div className="col">
                    <small id="passwordHelpBlock" className="descricao">
                      Sobrenome
                    </small>
                    <input type="text" id="sobrenome" name="sobrenome" class="form-control input-menor" placeholder="Sobrenome" value={form.sobrenome}onChange={handleChange} />
                    </div>
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted descricao"
                  >
                    Endereço de e-mail
                  </small>
                  <input type="email" id="email" name="email" className="form-control" placeholder="E-mail" aria-describedby="passwordHelpBlock" value={form.email} onChange={handleChange} />
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted descricao"
                  >
                    Senha
                  </small>
                  <input type="password" name="senha" id="senha" class="form-control" placeholder="Senha" aria-describedby="passwordHelpBlock" value={form.senha} onChange={handleChange} />
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted descricao"
                  >
                    Confirmar senha
                  </small>
                  <input type="password" id="confirmarSenha" name="confirmarSenha" class="form-control" placeholder=" Confirmar senha" aria-describedby="passwordHelpBlock" value={form.confirmarSenha} onChange={handleChange} />
                  <div className="buttons">
                    <button type="submit" class="btn btn-warning btn-create">
                      Criar nova conta
                    </button>
                    <button type="text" class="btn btn-warning btn-account">
                      <a href="/login">Já tenho conta</a>
                    </button>
                  </div>

                  <div className="logo">
                    <img
                      src={logo}
                      alt="logo do site"
                      className="logotipo"
                    ></img>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}