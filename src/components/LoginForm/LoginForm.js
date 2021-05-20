import React from 'react';
import './LoginForm.css'


export default function form() {
  return (
    <div className="mainDiv" >
      <form className="form-main">
        <div class="row">
          <div class="col">
            <small id="passwordHelpBlock" class="form-text text-muted descricao">Nome</small>
            <input type="text" name="nome" class="form-control input-menor" placeholder="Nome"></input>
          </div>
          <div class="col">
            <small id="passwordHelpBlock" class="form-text text-muted descricao">Sobrenome</small>
            <input type="text" name="sobrenome" class="form-control input-menor" placeholder="Sobrenome"></input>
          </div>
        </div>
        <small id="passwordHelpBlock" class="form-text text-muted descricao">Endereço de e-mail</small>
        <input type="email" name="email" id="inputPassword5" class="form-control input-email"
          aria-describedby="passwordHelpBlock"></input>
        <small id="passwordHelpBlock" class="form-text text-muted descricao">Senha</small>
        <input type="password" name="senha" id="inputPassword5" class="form-control input-senha"
          aria-describedby="passwordHelpBlock"></input>
        <small id="passwordHelpBlock" class="form-text text-muted descricao">Confirmar senha</small>
        <input type="password" id="inputPassword5" class="form-control input-comfirmar-senha"
          aria-describedby="passwordHelpBlock"></input>
        <button type="submit" class="btn btn-warning button-create">Criar nova conta</button>
        <button type="text" class="btn btn-warning button-account" text-decoration='none'><a href="/login">Já tenho conta</a>
        </button>

      </form>
    </div>
  );
}