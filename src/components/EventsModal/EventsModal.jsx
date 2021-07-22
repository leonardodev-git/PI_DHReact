import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import './EventsModal.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default function ({isOpen, onClose, onEventAdded}) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch()

      onEventAdded({
        title,
        start,
        end,
    })

    console.log(title)
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
            <Datetime value={start} onChange={(date) => setStart(date)} className="serviço" />
          </div>

          <div>
            <label htmlFor="">Data Final</label>
            <Datetime value={end} onChange={(date) => setEnd(date)} className="serviço" />
          </div>
          <button className="concluir">Concluir Agendamento</button>
        </div>
      </form>
    </Modal>
  )
}