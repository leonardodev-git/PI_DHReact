import './ConfirmedServide.css'
import payPal from '../../Assets/paypal.svg'
import sucess from '../../Assets/pay-sucess.svg'

export default function confirm() {


  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  const user = getCurrentUser()


  return (
    <div className="body body-confirmed">
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 offset-md-3">
              <div className="form form-login">
               <div className="row prof-contrat">
                <h2 className="profissa color-world">{user.user}</h2>
                <div className="type-service">
                  <div className="sucess">
                    <h6 className="service-sched">Serviço Agendado</h6>
                    <img src={sucess} alt="paypal" className="sucess-pay" />
                  </div>
                  <p className="service-type color-world ">
                    Corte Simples <br></br> <strong>11 de Agosto de 2020</strong> <br></br>
                    <strong>07:00-07:30 AM</strong>
                  </p>
                </div>


                <p className="nome color-world ">Total R$20,50</p>
                <p className="nome color-world ">Descontos - R$10,00</p>
                <p className="nome color-world">
                  <strong>Valor Final R$10,50</strong>
                </p>
                <small className="nome color-world ">Cupom aplicado PRIMEIRACOMPRA</small>
                <small className="nome color-world ">Inserir Cupom</small>
                <div>
                  <input type='text' placeholder='PRIMEIRACOMPRA'/>
                </div>
                <button type="submit" className="btn btn-warning paypal">
                  <img src={payPal} alt="paypal" className="img-paypal" />
                  <a href="/login/dashboard/notification">Pagar com PayPal</a>{' '}
                </button>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}