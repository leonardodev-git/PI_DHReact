import './Calendar.css'
import client2 from '../../Assets/cliente-2.png'
import img from '../../Assets/imagem.png'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import imgCarrousel1 from '../../Assets/Carrousel-1.png'
import imgCarrousel2 from '../../Assets/Carrousel-2.png'
import imgCarrousel3 from '../../Assets/Carrousel-3.png'
import imgCarrousel4 from '../../Assets/Carrousel-4.png'


export default function calendar() {
  return (

    <div className="body">
      <div class="container-fluid">
        <div className="row">
          <div className="col-2 navProfile">
            <img src={client2} alt="perfil" className="perfil" />
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
          <div className="col-10 px-lg-4">
            <div className="row  carrousel">
              <div className="col carrousel-professional">
                <img src={img} alt="barberShop" class="profilePhoto"></img>
                <h4>Mariana Silva</h4>
                <small className="especialidade">Especialista em corte</small>  <br></br>
                <button type="button" class="btn btn-warning input-maior"> <a
                  href="/dash/<%=barbeiro.id %>/checkout">Agendar</a>
                </button>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel1} alt="carousel" class="carousel-img"></img>
                <p>Corte Total</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel2} alt="carousel" class="carousel-img"></img>
                <p>Corte Simples</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel3} alt="carousel" class="carousel-img"></img>
                <p>Corte na Tesoura</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel4} alt="carousel" class="carousel-img"></img>
                <p>Corte Complexo</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
            </div>
            <div className="row schedule-area">
              <div className="col-8">
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  weekends={false}
                  events={[
                    { title: 'event 1', date: '2021-05-25' },
                    { title: 'event 2', date: '2019-04-02' }]}
                />
              </div>
              <div className="col-4 ScheduleList">
                <h3 className="Schedule-title">Agendamentos</h3>
                <div className="lista-agendamento-callendar">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={img} alt="" class="fotoAgendamento"></img>
                    <button type="button" class="btn btn-warning btnDeletar">Deletar</button>
                  </div>
                </div>
                <div className="lista-agendamento-callendar">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={img} alt="" class="fotoAgendamento"></img>
                    <button type="button" class="btn btn-warning btnDeletar">Deletar</button>
                  </div>
                </div>
                <div className="lista-agendamento-callendar">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={img} alt="" class="fotoAgendamento"></img>
                    <button type="button" class="btn btn-warning btnDeletar">Deletar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}