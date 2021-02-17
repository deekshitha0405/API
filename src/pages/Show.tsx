import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      width                 :  '45%',
      height                :  '35%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
function Show({name,idx,value}:any) {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function handleChange(){
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }
    return (
        <div>
            <div id={idx} onClick={()=>handleChange()}>{name}</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button onClick={closeModal}>close</button>
                <h2>{value.userId}</h2>
                <h3>{value.id}</h3>
                <h5>{value.title}</h5>
            </Modal>
        </div>
    )
}

export default Show
