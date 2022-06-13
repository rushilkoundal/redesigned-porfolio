import './Modal.css'
import { useContext } from 'react'
import { ThemeContext } from '../Context';

function Modal({ setModal, img, title, desc }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="popUp">
      <div className='modal'>
        <div className="img"><img src={img} alt="img" /></div>
        <h1 className={darkMode ? 'text-dark' : 'text'}>{title}</h1>
        <h3 className='text'>Process behind the design</h3>
        <p className='text'>{desc}</p>
      </div>
      <button className={darkMode ? "close-btn-dark" : "close-btn"} onClick={() => setModal(false)}>Close</button>
    </div>
  )
}

export default Modal