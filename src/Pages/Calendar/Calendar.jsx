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
import prof1 from '../../Assets/funcionarios/julia-ramos.jpg'
import prof2 from '../../Assets/funcionarios/jonas-lobo.jpg'
import prof3 from '../../Assets/funcionarios/leonardo-magalhaes.jpg'
import prof4 from '../../Assets/funcionarios/bruno-guedes.jpg'
import prof5 from '../../Assets/funcionarios/pedro-braga.jpg'
import prof6 from '../../Assets/funcionarios/joao-marcos.jpg'
import prof7 from '../../Assets/funcionarios/guilherme-totoli.jpg'
import prof8 from '../../Assets/funcionarios/renato-napoli.jpg'
import prof9 from '../../Assets/funcionarios/eduardo-amorim.jpg'
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

   function logOut() {
     localStorage.removeItem('Token')
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
              <div className="button-out">
                <button className="logout" onClick={logOut}>
                  <Link to="/">Sair</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-10 px-lg-4">
            <div className="row  carrousel">
              <div className="col carrousel-professional">
                <img src={professionalDetails.avatar} alt='barberShop' class='profilePhoto'/>
                <h4> {professionalDetails.nome}</h4>
                <small className="especialidade">Especialista em {professionalDetails.servicos[0]}</small> <br></br>
                <button type="button" className="confirma">

                  <a href="/login/dashboard/confirmed">Confirmar</a>
                </button>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel1} alt="carousel" class="carousel-img"></img>
                <p className="specialty">Corte Total</p>
                <small className="specification">Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel2} alt="carousel" class="carousel-img"></img>
                <p className="specialty">Corte Simples</p>
                <small className="specification">Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel3} alt="carousel" class="carousel-img"></img>
                <p className="specialty">Corte na Tesoura</p>
                <small className="specification">Corte simples de cabelo com remoção total dos fios</small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel4} alt="carousel" class="carousel-img"></img>
                <p className="specialty">Corte Complexo</p>
                <small className="specification">Corte simples de cabelo com remoção total dos fios</small>

              </div>
            </div>
            <div className="row schedule-area">
              <div className="col-8">
                <div className="schedule-to">
                  <button onClick={() => setModalOpen(true)} className="to-schedule">
                    Faça seu agendamento
                  </button>
                </div>
                <div className="calendar" style={{ position: 'relative', zIndex: 0 }}>
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
              <div className="col-4 agendamento">
                <p className="h2 tituloAgendamento">Meus Agendamentos</p>
                <p className="tomorrow">Amanhã</p>

                <div className="mostly-customized-scrollbar02">
                  {/*<span>Agendamento 1</span>*/}
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof1} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 2</span>*/}
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof2} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 3</span>*/}
                  <p className="day-month">9 de março</p>
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof3} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 4</span>*/}
                  <p className="day-month">10 de março</p>
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof4} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 5</span>*/}
                  <p className="day-month">11 de março</p>
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof5} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 6</span>*/}
                  <p className="day-month">12 de março</p>
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof6} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 7</span>*/}
                  <p className="day-month">13 de março</p>
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof7} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 8</span>*/}
                  <p className="day-month">14 de março</p>
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof8} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<span>Agendamento 9</span>*/}
                  <p className="day-month">15 de março</p>
                  <div className="row">
                    <div className="col lista-agendamento">
                      <p className="service">Corte Simples</p>
                      <p className="service">08:00-08:30 AM</p>
                      <div className="detalhe">
                        <img src={prof9} alt="" className="fotoAgendamento"></img>
                        <button type="button" className="input-agendamento">
                          Cancelar agendamento
                        </button>
                      </div>
                    </div>
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
