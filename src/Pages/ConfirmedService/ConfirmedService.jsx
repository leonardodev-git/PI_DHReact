import client2 from '../../Assets/cliente-2.png'
import img from '../../Assets/imagem.png'
import './ConfirmedServide.css'

export default function confirm() {
  return (
    <div className="body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 nav">
            <img src={client2} alt="perfil" className="profile" />
            <div class="nav-info">
              <small class="boas-vindas">Bem vindo(a)!</small>
              <h2 class="cliente">Nome do Cliente</h2>
              <p class="email">Email do Cliente</p>
              <ul class="list-group">
                <li class="list-group-item nav-lista"><i class="fas fa-home menu"></i>Dashboard</li>
                <li class="list-group-item nav-lista"><i class="fas fa-bell menu"></i>Notificações</li>
                <li class="list-group-item nav-lista"><i class="fas fa-cog menu"></i>Preferências</li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 offset-md-2 medium">
            <div class="form form-login">
              <div class="cadastro">
                <img src={img} alt="foto_perfil" class="perfil-img" />
              </div>
              <div class="row">
                <p class="h2 nome">Mariana Silva</p>
                <small class="nome">Serviço Agendado</small>
                <button type="submit" class="btn btn-warning confirmed">Corte Simples <br></br> <strong>11 de Agosto de 2020</strong>  <br></br> <strong>07:00-07:30 AM</strong></button>

                <p class="nome">Total R$20,50</p>
                <p class="nome">Descontos - R$10,00</p>
                <p class="nome"><strong>Valor Final R$10,50</strong></p>
                <small class="nome">Cupom aplicado PRIMEIRACOMPRA</small>
                <small class="nome">Inserir Cupom</small>
                <div>
                  <input type="text" placeholder="PRIMEIRACOMPRA"></input>
                </div>
                <button type="submit" class="btn btn-warning paypal"> <img src="/images/paypal.svg" alt="paypal" class="img-paypal" /><a href="/dash/checkout/confirm">Pagar com PayPal</a> </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}