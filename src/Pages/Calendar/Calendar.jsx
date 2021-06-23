import './Calendar.css'
import client2 from '../../Assets/cliente-2.png'
import img from '../../Assets/imagem.png'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import imgCarrousel1 from '../../Assets/Carrousel-1.png'
import imgCarrousel2 from '../../Assets/Carrousel-2.png'
import imgCarrousel3 from '../../Assets/Carrousel-3.png'
import imgCarrousel4 from '../../Assets/Carrousel-4.png'
import { useRef, useState } from 'react'
import EventsModal from '../../components/EventsModal/EventsModal'
import UserModal from '../../components/UserModal/UserModal'
import { Link, useHistory } from 'react-router-dom'
import moment from 'moment'

export default function Calendar() {
  const [professional, setProfessional] = useState({})
  const [modalOpen, setModalOpen] = useState()
  const [modalOpenUser, setModalOpenUser] = useState()
  const [error, setError] = useState('')
  const calendarRef = useRef(null)

  let history = useHistory()

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('Token'))
  }
  const user = getCurrentUser()

  const getProfessionalDetails = () => {
    return JSON.parse(localStorage.getItem('Professional'))
  }
  const professionalDetails = getProfessionalDetails()

  const onEventAdded = async (e) => {
    // const event = await fetch('localhost:5000/servico', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(calendarApi),
    // })
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      start: moment(e.start).toDate(),
      end: moment(e.end).toDate(),
      title: e.title,
    })

    console.log(calendarApi)
  }

  async function handleEnventAdd(data) {
    // const event = await fetch('localhost:5000/servico', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(),
    // })
  }

  async function handleDataSet(data) {
    const tokenRes = await fetch('rota que será criada para os agendamentos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
  }

  async function handleDelete() {
    const user = getCurrentUser()
    const tokenRes = await fetch(`http://localhost:5000/users`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': user.acessToken,
      },
    })
    const success = await tokenRes.json()
    setError(success.message)
    setTimeout(() => history.push('/'), 5000)
  }

  return (
    <div className="body">
      <div class="container-fluid">
        <div className="row">
          <div className="col-2 navProfile">
            <img src={client2} alt="perfil" className="foto-perfil" />
            <div class="nav-info">
              <small class="boas-vindas">Bem vindo(a)!</small>
              <h2 className="cliente">{user.user}</h2>
              <p className="email">{user.email}</p>
              <ul class="list-group">
                <li className="nav-lista">
                  <button className="buttonDash fa fa-home fa-fw  menu">Dashboard</button>
                </li>
                <li className="nav-lista">
                  <button className=" fa fa-cog fa-fw  menu" onClick={() => setModalOpenUser(true)}>
                    Alterar dados
                  </button>{' '}
                </li>
                <li className="nav-lista">
                  <button className=" fa fa-bell fa-fw  menu" onClick={handleDelete}>
                    Deletar Conta
                  </button>
                </li>
              </ul>
              <UserModal isOpen={modalOpenUser} onClose={() => setModalOpenUser(false)} />
              <button className="exitButton">
                <Link className="exitLink" to="/">
                  Sair
                </Link>
              </button>
            </div>
          </div>

          <div className="col-10 px-lg-4">
            <div className="row  carrousel">
              <div className="col carrousel-professional">
                <img src={professionalDetails.avatar} alt='barberShop' class='profilePhoto'/>
                <h4> {professionalDetails.nome}</h4>
                <small className="especialidade">Especialista em {professionalDetails.servicos[0]}</small> <br/>
                <button type="button" className="btn btn-warning input-maior">
                  {' '}
                  <a href="/login/dashboard/confirmed">Confirmar</a>
                </button>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel1} alt='carousel' class='carousel-img'/>
                <p>Corte Total</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel2} alt='carousel' class='carousel-img'/>
                <p>Corte Simples</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel3} alt='carousel' class='carousel-img'/>
                <p>Corte na Tesoura</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel4} alt='carousel' class='carousel-img'/>
                <p>Corte Complexo</p>
                <small>Corte simples de cabelo com remoção total dos fios</small>
              </div>
            </div>
            <div className="row schedule-area">
              <div className="col-8">
                <button onClick={() => setModalOpen(true)} className="btn-schedule">
                  Faça seu agendamento
                </button>
                <div style={{ position: 'relative', zIndex: 0 }}>
                  <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    weekends={false}
                    eventAdd={(e) => handleEnventAdd(e)}
                  />
                </div>

                <EventsModal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                  onEventAdded={(e) => onEventAdded(e)}
                />
              </div>
              <div className="col-4 ScheduleList">
                <h3 className="Schedule-title">Agendamentos</h3>
                <div className="lista-agendamento-callendar">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={img} alt='' class='fotoAgendamento'/>
                    <button type="button" class="btn btn-warning btnDeletar">
                      Deletar
                    </button>
                  </div>
                </div>
                <div className="lista-agendamento-callendar">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={img} alt='' class='fotoAgendamento'/>
                    <button type="button" class="btn btn-warning btnDeletar">
                      Deletar
                    </button>
                  </div>
                </div>
                <div className="lista-agendamento-callendar">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={img} alt='' class='fotoAgendamento'/>
                    <button type="button" class="btn btn-warning btnDeletar">
                      Deletar
                    </button>
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
