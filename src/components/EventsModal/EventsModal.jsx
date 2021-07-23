import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import './EventsModal.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default function ({isOpen, onClose, onEventAdded, setData}) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = async (e) => {
    e.preventDefault();
    const event = {
      start,
      end,
      title,
    }
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('Token'))
  }

  const user = getCurrentUser()

  setData(event)

      onEventAdded(await fetch('http://localhost:5000/agendamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': user.acessToken,
        },
        body: JSON.stringify(event)
      }))
      onClose();
    }
    

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="corpo">
      <form onSubmit={onSubmit}>
        <div className="form-ajust">
          <h1 className="agendar">Agendar serviço!</h1>
          <input
            className="serviço"
            placeholder="Agendamento"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />

          <div>
            <label htmlFor="">Data Inicial</label>
            <Datetime initialValue={start} onChange={(date) => setStart(date.format('YYYY-MM-DD HH:mm:ss'))} className="serviço" initialViewDate={start}/>
          </div>

          <div>
            <label htmlFor="">Data Final</label>
            <Datetime initialValue={end} onChange={(date) => setEnd(date.format('YYYY-MM-DD HH:mm:ss'))} className="serviço" initialViewDate={end} closeOnClickOutside={false}/>
          </div>
          <button className="concluir">Concluir Agendamento</button>
        </div>
      </form>
    </Modal>
  )
}