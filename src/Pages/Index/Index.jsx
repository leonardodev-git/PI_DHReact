import ilustracao from '../../Assets/ilustracao.svg'
import logo from '../../Assets/Logo.svg'
import './Index.css'

export default function index() {
  return (
    <div className="body">
      <div class="container">
        <div class="row">
          <div class="col-7">
            <h1>Seja bem-vindo!</h1> <br></br>
            <p> Antes de tudo, efetue seu login. <br></br>
             Caso você ainda não possua um cadastro, pode criar um!
         </p>
            <img class="ilustra" src={ilustracao} alt="Illustração"></img>
          </div>
          <div class="col-5 mw-100 div-form box-form">
            <div class="form">
              <div className="cadastro">
                <span>Cadastro</span>
                <span>Login</span>
              </div>
              <form action="/login" method="POST">
                <div class="row">
                  <div class="col">
                    <small id="passwordHelpBlock" class="form-text text-muted descricao">Nome</small>
                    <input type="text" name="nome" class="form-control" placeholder="Nome"></input>
                  </div>
                  <div class="col">
                    <small id="passwordHelpBlock" class="form-text text-muted">Sobrenome</small>
                    <input type="text" name="sobrenome" class="form-control input-menor" placeholder="Sobrenome"></input>
                  </div>
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Endereço de e-mail</small>
                  <input type="email" name="email" id="inputPassword5" class="form-control" placeholder="E-mail" aria-describedby="passwordHelpBlock"></input>
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Senha</small>
                  <input type="password" name="senha" id="inputPassword5" class="form-control input-maior" placeholder="Senha" aria-describedby="passwordHelpBlock"></input>
                  <small id="passwordHelpBlock" class="form-text text-muted descricao">Confirmar senha</small>
                  <input type="password" id="inputPassword5" class="form-control input-maior" placeholder=" Confirmar senha" aria-describedby="passwordHelpBlock"></input>
                  <div className="buttons">
                    <button type="submit" class="btn btn-warning btn-create">Criar nova conta</button>
                    <button type="text" class="btn btn-warning btn-account" text-decoration='none'><a href="/login">Já tenho conta</a>
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