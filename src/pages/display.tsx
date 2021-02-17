// export default Display
import React,{useEffect,useState} from 'react'
// import PropTypes from 'prop-types'
import Show from './Show'
// import { render } from '@testing-library/react'
// import Show from './Show';
import Modal from 'react-modal';
import {MakePostRequest} from '../service'

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
// Modal.setAppElement('main')
const Display = ({data=[]}:any) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [item,setItem] = React.useState("");
    function handleChange(){
        console.log(item);
        MakePostRequest(item)
    }
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
     
      function closeModal(){
        setIsOpen(false);
      }
    useEffect(() => {
    }, [data]);
   
    
       return(
        <div>
           {
               data.map((value:any)=>
                <Show idx={value.id} name={value.title}  value={value}/>
                )
            }
        <button onClick={openModal}>Add</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <button onClick={closeModal}>close</button>
            <div>Enter the new Data to be inserted</div>
            <input type="text" value={item}  onChange={(e) => setItem(e.target.value)} />
            <button onClick={()=>handleChange()}>Enter</button>
        </Modal>
        </div>
      )
}

export default Display



