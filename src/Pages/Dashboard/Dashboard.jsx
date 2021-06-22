import client2 from '../../Assets/cliente-2.png'
import barberShop from '../../Assets/barberShop.jpg'
import logoBarber from '../../Assets/logotipo_barbershop.svg'
import prof1 from '../../Assets/funcionarios/alexandre-cunha.png'
import prof2 from '../../Assets/funcionarios/alvaro-dias.png'
import prof3 from '../../Assets/funcionarios/jennifer-suzan.png'
import img from '../../Assets/imagem.png'
import './Dashboard.css'
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaHotjar }  from 'react-icons/fa'
import { FaStar }  from 'react-icons/fa'
import UserModal from '../../components/UserModal/UserModal'



export default function Dashboard() {
  const [professional, setProfessional] = useState([])
  const [showinfo, setshowInfo] = useState(false)
  const [error, setError] = useState('')
  const [modalOpen, setModalOpen] = useState();

  let history = useHistory();

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  const user = getCurrentUser()

  useEffect(() => {
    setshowInfo(true)
  }, [professional]);

  useEffect(() => {
     getProfessional()
  }, []);

 function onUserUpdate () {

 }

  async function getProfessional () {
    const user = getCurrentUser()
 
    const tokenRes = await fetch("http://localhost:5000/profissionals/all/", {
           method: 'GET',
           headers: {
          'Content-Type': 'application/json',
           'x-access-token' : user.acessToken
        }
    
  });
    const content = await tokenRes.json();
    setProfessional(content.allProfissionals)
  }

  async function handleDelete () {
    const user = getCurrentUser()
    const tokenRes = await fetch(`http://localhost:5000/users`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token' : user.acessToken
      },
    } )
    const success = await tokenRes.json()
    setError(success.message)
    setTimeout(() => history.push('/'), 5000);    
  }

  



  function logOut () {
    localStorage.removeItem('Token')
  }
  
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 navProfile">
            <img src={client2} alt="perfil" className="foto-perfil border-profile" />
            <div className="nav-info">
              <small className="boas-vindas">Bem vindo(a)!</small>
              {error}
              <h2 className="cliente">{user.user}</h2>
              <p className="email">{user.email}</p>
              <ul className="list-group">
                <li className="nav-lista">
                  <button className="buttonDash fa fa-home fa-fw  menu">Dashboard</button>
                </li>
                <li className="nav-lista">
                  <button className="buttonDash fa fa-cog fa-fw  menu" onClick={() => setModalOpen(true)}>
                    Alterar dados
                  </button>{' '}
                </li>
                <li className="nav-lista">
                  <button className="buttonDash fa fa-bell fa-fw  menu" onClick={handleDelete}>
                    Deletar Conta
                  </button>
                </li>
              </ul>
              <UserModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onUserUpdate={(e) => onUserUpdate(e)} />
              <button className="logout" onClick={logOut}>
                <Link className="fas fa-sign-out-alt logout" to="/">
                  Sair
                </Link>
              </button>
            </div>
          </div>

          <div className="col-7 px-lg-4">
            <div className="row barberInfo">
              <div className="col">
                <div className="logoBarbe">
                  <img src={logoBarber} alt="logoBarber" className="barberLogo"></img>
                </div>
              </div>

              <div>
                <div className="shopBarbe">
                  <img src={barberShop} alt="barberShop" className="barbershop"></img>
                  <div className="col">
                    <div>
                      <p className="welcome">
                        A Barbershop é uma barbearia com mais de 12 anos de serviços prestados e pode contar com os
                        melhores profissionais de São Paulo para te atender.
                      </p>
                    </div>
                    <div className="contato">
                      <button type="button" className="contact">
                        Entrar em contato
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row disponiveis">
              <h2 className="prof">Profissionais Disponíveis</h2>
            </div>

            {/*Profissionais*/}
            <div className="row justify-content-around profissionais">
              {showinfo &&
                professional.map((data, i) => {
                  return (
                    <div className="col-4 professionalSchedule" key={i}>
                      <img src={data.avatar} alt="perfil" className="fotoPerfil"></img>
                      <h5>{data.nome}</h5>
                      <p className="especialidade">Especialidade do Barbeiro</p>
                      <button className="input-agenda" type="button">
                        {' '}
                        <a href="/login/dashboard/calendar">
                          Verificar agenda
                        </a>
                      </button>
                    </div>
                  )
                })}
            </div>
          </div>
          <div class="col-3 agendamentos">
            <p class="h2 tituloAgendamento">Meus Agendamentos</p>
            <p class="h5 date">Amanhã</p>

            <div className="mostly-customized-scrollbar">
              {/*<span>Agendamento 1</span>*/}
              <div class="row">
                <div class="col lista-agendamento">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={prof1} alt="" class="fotoAgendamento"></img>
                    <button type="button" class="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>

              {/*<span>Agendamento 2</span>*/}
              <div class="row">
                <div class="col lista-agendamento">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={prof2} alt="" class="fotoAgendamento"></img>
                    <button type="button" class="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>

              {/*<span>Agendamento 3</span>*/}
              <p class="h5">9 de março</p>
              <div class="row">
                <div class="col lista-agendamento">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={prof3} alt="" class="fotoAgendamento"></img>
                    <button type="button" class="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>

              {/*<span>Agendamento 4</span>*/}
              <p className="h5">10 de março</p>
              <div class="row">
                <div class="col lista-agendamento">
                  <p class="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div class="detalhe">
                    <img src={prof3} alt="" class="fotoAgendamento"></img>
                    <button type="button" class="btn btn-warning btnDeletar">
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
              {/*<span>Agendamento 5</span>*/}
              <p className="h5">11 de março</p>
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof3} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>
              {/*<span>Agendamento 6</span>*/}
              <p className="h5">12 de março</p>
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof3} alt="" className="fotoAgendamento"></img>
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