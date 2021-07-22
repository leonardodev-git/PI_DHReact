import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import './UserModal.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default function ({isOpen, onClose}) {
  const [info, setInfo] = useState('')
  const [form, setForm] = useState({
    email: '',
    nome: '',
    sobrenome: ''
  });

  let history = useHistory();

  function handleChange({target}) {
    const { id, value } = target;
    setForm({...form, [id]: value}) 
} 

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  getCurrentUser()

  const onSubmit = async (e) => {
    e.preventDefault();
      const user = getCurrentUser()
    const tokenRes = await fetch(`http://localhost:5000/users`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token' : user.acessToken
      },
      body: JSON.stringify(form),
    } )
    const response = await tokenRes.json()
    setInfo(response.front)
    history.push('/login/dashboard')  
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="corpo">
      <div className="form">
      <form onSubmit={onSubmit}> 
        <div className="form-ajust">
          <h1 className="dados">Altere seus dados!</h1>
            {info}
          <div className="ident">
            <label className="space" htmlFor="email">
              Email:
            </label>
            <input
              className="escreva"
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="ident">
            <label className="space" htmlFor="nome">
              Nome:
            </label>
            <input className="escreva" type="text" id="nome" value={form.nome} onChange={handleChange} name="nome" />
          </div>

          <div className="ident">
            <label className="space" htmlFor="sobrenome">
              Sobrenome:
            </label>
            <input
              className="escreva"
              type="text"
              id="sobrenome"
              value={form.sobrenome}
              onChange={handleChange}
              name="sobrenome"
            />
          </div>
          <button className="alter" onClick={() => onSubmit}> 
               Concluir Alterações
           </button>
        </div>
      </form>
      </div>
    </Modal>
  )
}