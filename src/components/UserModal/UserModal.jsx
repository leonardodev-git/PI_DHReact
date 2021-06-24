import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import './UserModal.css'


export default function ({isOpen, onClose}) {
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
    history.push('/login/dashboard');
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="corpo">
      <form onSubmit={onSubmit}>
        <div className="form-ajust">
          <h1 className="dados">Altere seus dados!</h1>
          <div className="ident">
            <label className="space" htmlFor="">
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
            <label className="space" htmlFor="">
              Nome:
            </label>
            <input className="escreva" type="text" id="nome" value={form.nome} onChange={handleChange} name="nome" />
          </div>

          <div className="ident">
            <label className="space" htmlFor="">
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
          <button className="alter" href="/login/dashboard">
            <a>Concluir Alterações</a>
          </button>
        </div>
      </form>
    </Modal>
  )
}