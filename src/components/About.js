import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function About() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [Savtitle, setSavtitle] = useState("");

  const [title, settitle] = useState({});
   let [myStyle,settyles]=useState({});
  const [darkmode, setdarkmode] = useState(false);


 

  const darkmodes=()=>{
    if(darkmode===false){
        settyles({
            backgroundColor:"black",
            color:"white"

         })
         setdarkmode(true)
        }
    else{
        settyles({
            backgroundColor:"white",
            color:"black"

         })
         setdarkmode(false)

    }
   
    

  }
  const changeText = (event) => {
    setText(event.target.value);
  }
  const changeTitle = (event) => {
    settitle(event.target.value);
  }

  const saved = () => {
    setAmount(text);
    setSavtitle(title)
  }
  const hide=()=>{
       
  }

  return (
    <div 
      className="modal show"
      style={{ display: 'block', position: 'initial'  }}
    >
      <Modal.Dialog style={myStyle}>
        <Modal.Header onClick={hide} closeButton>
          <Modal.Title>
            <input   style={myStyle}
              onChange={changeTitle}
              className='form-control' 
              placeholder='Write Your Title'
              type="text"
              value={title}
            />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={myStyle}>
          <input
            onChange={changeText}
            className='form-control'
            placeholder='Write your text here'
            value={text}
            type="text"
          />
        </Modal.Body>

        <Modal.Footer style={myStyle}>
          <Button variant="secondary">Close</Button>
          <Button onClick={saved} variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      
      {/* Display the saved text */}
      TITLE: <p>{Savtitle}</p>
      Content:<p>{amount}</p>
      <button onClick={darkmodes}  className='btn btn-secondary' style={myStyle}> {darkmode === false ? "Enable Dark Mode" : "Disable Dark Mode"}</button>

    </div>
  );
}
