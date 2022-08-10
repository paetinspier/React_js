import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalOpen] = useState(false);
    
    function delete_handler(){
        setModalOpen(true);
    }
    function closeModal_handler(){
        setModalOpen(false);
    }
  return (
    <div className="card">
      <h2>{props.txt}</h2>
      <div className="actions">
        <button className="btn" onClick={delete_handler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModal_handler} onConfirm={closeModal_handler}/>}
      { modalIsOpen && <Backdrop onClick={closeModal_handler}/>}
    </div>
    

  );
}

export default Todo;
