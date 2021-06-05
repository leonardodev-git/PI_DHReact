import React, { useContext } from "react";
import img from "../../Assets/ilustracao.svg";
import logo from "../../Assets/Logo.svg";
import useForm from "../../Hooks/UseForm";
import { UserContext } from '../../UserContext';
import "./Login.css";

export default function Login() {
  const userEmail = useForm();
  const userPassword = useForm();

  const {userLogin} = useContext(UserContext)

 async function loginSubimt(e) {
    e.preventDefault();
    userLogin(email.value, senha.value)
}


  return (
    <div className="body">
      <div class="container">
        <div class="row">
          <div class="col-7 texto">
            <h1>Seja bem-vindo!</h1> <br></br>
            <br></br>
            <img class="ilustra" src={img} alt="Ilustração"></img>
          </div>
          <div class="col-5 mw-100 div-form box-form">
            <div class="form form-login">
              <div class="cadastro">
                <span>Login</span>
              </div>
              <form onSubmit={loginSubimt} method="POST">
                <div class="row">
                  <small
                    id="passwordHelpBlock"
                    class="form-text text-muted descricao"
                  >
                    Endereço de e-mail
                  </small>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Endereço de email"
                    value={userEmail.value}
                    onChange={userEmail.handleChange}
                 
                  />
                  <small
                    id="passwordHelpBlock"
                    class="form-text text-muted descricao"
                  >
                    Senha
                  </small>
                  <input
                    type="password"
                    class="form-control"
                    name="senha"
                    placeholder="Senha"
                    value={userPassword.value}
                    onChange={userPassword.handleChange}
                  />
                  <small
                    id="passwordHelpBlock"
                    class="form-text text-muted descricao"
                  >
                    Manter Logado
                    <input type="checkbox" name="lembreLogado" />
                  </small>
                  <div>
                    <button type="submit" class="btn btn-warning">
                      Efetuar login
                    </button>
                    <img src={logo} alt="logo do site" class="logo" />
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
