import '../ConfirmedService/ConfirmedServide.css'
import { useHistory } from 'react-router-dom'


export default function Notification() {

  let history = useHistory()

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  const user = getCurrentUser()

  const handleBacktoBegin = () => {
    history.push('/login/dashboard')
  }



  return (
    <div className="body body-confirmed">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="form form-login">
            <div class="row prof-contrat">
            <h2 className="profissa color-world">{user.user}</h2>
            <h6 className="service-sched">Serviço Agendado</h6>
              <button class="btn btn-warning input-maior ajuste">Corte Simples <br/> <strong>11 de Agosto de 2020</strong>  <br/> <strong>07:00-07:30 AM</strong>      </button>

              <p class="nome color-world">Total R$20,50</p>
              <p class="nome color-world">Descontos - R$10,00</p>
              <p class="nome color-world"><strong>Valor Final R$10,50</strong></p>
              <small class="nome color-world">Cupom aplicado PRIMEIRACOMPRA</small>
              <p class="agradecimento color-world">Obrigado! Os detalhes foram enviados para o e-mailanamaria@gmail.com</p>
              <button type="submit" class="btn btn-warning input-maior inicio" onClick={handleBacktoBegin}>Voltar ao início</button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}