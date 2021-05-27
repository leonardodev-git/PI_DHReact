import img from '../../Assets/ilustracao.svg'
import logo from '../../Assets/Logo.svg'
import './Login.css'


export default function login() {
  return (
    <div className="body">
      <div class="container">
        <div class="row">
          <div class="col-7 texto">
            <h1>Seja bem-vindo!</h1> <br></br><br></br>
            <img class="ilustra" src={img} alt="Ilustração"></img>
          </div>
          <div class="col-5 mw-100 div-form box-form">
            <div class="form form-login">
              <div class="cadastro">
                <span>Login</span>
              </div>
              <form action="/login" method="POST">
                <div class="row">
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Endereço de e-mail</small>
                  <input type="email" id="inputPassword5" class="form-control input-maior"
                    aria-describedby="passwordHelpBlock" name="email"></input>
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Senha</small>
                  <input type="password" id="inputPassword5" class="form-control input-maior"
                    aria-describedby="passwordHelpBlock" name="senha"></input>
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Manter Logado<input type="checkbox" name='lembreLogado'></input>
                  </small>
                  <div>
                    <button type="submit" class="btn btn-warning input-maior">Efetuar login</button>
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