import client2 from '../../Assets/cliente-2.png'
import logoBarber from '../../Assets/logotipo_barbershop.svg'
import prof1 from '../../Assets/funcionarios/julia-ramos.jpg'
import prof2 from '../../Assets/funcionarios/jonas-lobo.jpg'
import prof3 from '../../Assets/funcionarios/leonardo-magalhaes.jpg'
import prof4 from '../../Assets/funcionarios/bruno-guedes.jpg'
import prof5 from '../../Assets/funcionarios/pedro-braga.jpg'
import prof6 from '../../Assets/funcionarios/joao-marcos.jpg'
import prof7 from '../../Assets/funcionarios/guilherme-totoli.jpg'
import prof8 from '../../Assets/funcionarios/renato-napoli.jpg'
import prof9 from '../../Assets/funcionarios/eduardo-amorim.jpg'
import './Dashboard.css'
import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserModal from '../../components/UserModal/UserModal'

export default function Dashboard() {
  const [professional, setProfessional] = useState([])
  const [showInfo, setShowInfo] = useState(false)
  const [error, setError] = useState('')
  const [modalOpen, setModalOpen] = useState()
  const [info, setInfo] = useState('')

  let history = useHistory()

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('Token'))
  }
  const user = getCurrentUser()

  useEffect(() => {
    setShowInfo(true)
  }, [professional])

  useEffect(() => {
    getProfessional()
  }, [])

  async function getProfessional() {
    const user = getCurrentUser()

    const tokenRes = await fetch('http://localhost:5000/profissionals/all/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': user.acessToken,
      },
    })
    const content = await tokenRes.json()
    setProfessional(content.allProfissionals)
  }

  const handleDelete = async () =>  {
    const user = getCurrentUser()
    const tokenRes = await fetch(`http://localhost:5000/users`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': user.acessToken,
      },
    })
    setTimeout(() => history.push('/'), 5000)
    const success = await tokenRes.json()
    setError(success.message)
    setInfo(success.front)
  }

  async function getProfessionalID(id) {
    const user = getCurrentUser()

    const getProfessionalId = await fetch(`http://localhost:5000/profissionals/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': user.acessToken,
      },
    })
    const content = await getProfessionalId.json()
    localStorage.setItem('Professional', JSON.stringify(content.professionalDetails))
    history.push('/login/dashboard/calendar')
  }

  function logOut() {
    localStorage.removeItem('Token')
  }


  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row  all-mobile">
          <div className="col-xl-12  navProfile navMobile">
            <img src={client2} alt="perfil" className="foto-perfil border-profile" />
            <div className="info-mobile col-sm-6 col-xl-12">
              <small className="boas-vindas bemvindo-mobile col-xs-2">Bem vindo(a)!</small>
              {error}
              <h2 className="cliente cliente-mobile col-sm-4 col-xs-2">{user.user}</h2>
              <p className="email">{user.email}</p>

              <ul className="list-group">
                <li className="nav-lista">
                  <button className=" fa fa-home fa-fw  menu">Dashboard</button>
                </li>
                <li className="nav-lista">
                  <button className=" fa fa-cog fa-fw  menu" onClick={() => setModalOpen(true)}>
                    Alterar dados
                  </button>{' '}
                </li>
                <li className="nav-lista">
                  <button className=" fa fa-bell fa-fw  menu" onClick={() => handleDelete()}>
                    Deletar Conta
                  </button>
                </li>
              </ul>
              <UserModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
              <div className="button-sair">
                <button className="logout" onClick={logOut}>
                  <Link to="/">
                    <p>Sair</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-xl-7 sm-6 px-lg-12 ">
            <div className="row barberInfo mobile-info">
              <div className="info-mobile">
                <div className="col-sm-12 shopBarbe barbe-mobile">
                  <img src={logoBarber} alt="barberShop" className=" barberLogo logo-mobile"></img>
                  <div className="col col-lg-8 coluna-contato mobile-contato">
                    <div className="weldiv-mobile">
                      <div className="col-sm-12 divwel-mobile">
                        <p className=" col-sm-12 welcome wel-mobile">
                          A Barbershop é uma barbearia com mais de 12 anos de serviços prestados e pode contar com os
                          melhores profissionais de São Paulo para te atender.
                        </p>
                      </div>
                    </div>
                    <div className="contato">
                      <a
                        classname="cta"
                        type="button"
                        href="https://wa.me/5511983099904?text=Olá!%20:)%20em%20que%20podemos%20te%20ajudar?"
                        className="contact"
                      >
                        Entrar em contato
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row disponiveis">
              <h1 className="pena">{info}</h1>
              <h2 className="prof">Profissionais Disponíveis</h2>
            </div>

            {/*Profissionais*/}

            
            <div className="row justify-content-around profissionais">
              {showInfo &&
                professional.map((data, i) => {
                  return (
                    <div className="col-6 prof-mobile professionalSchedule" key={i}>
                      <img src={data.avatar} alt="perfil" className="fotoPerfil" />
                      <h5>{data.nome}</h5>
                      <p className="especialidade">Especialidade do Barbeiro</p>
                      <button className="input-agenda" type="button" onClick={() => getProfessionalID(data.id)}>
                        Verificar agenda
                      </button>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className="col-3 agenda-mobile agendamentos">
            <p className="h2 tituloAgendamento">Meus Agendamentos</p>
            <p className="tomorrow">Amanhã</p>

            <div className="mostly-customized-scrollbar">
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
  )
}
