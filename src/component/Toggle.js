import './Toggle.css'
import Sun from '../assets/sun.png'
import Moon from '../assets/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../Context'

function Toggle() {
const theme = useContext(ThemeContext);
const handleClick = () => {
  theme.dispatch({type: 'TOGGLE'});
}
  return (
    <div className='toggle'>
        <img src={Sun} alt="sun" className="toggle__icon sun" />
        <img src={Moon} alt="moon" className="toggle__icon moon" />
        <div style={{left: theme.state.darkMode ? '0px' : '25px'}} className="toggle__button" onClick={handleClick}></div>
    </div>
  )
}

export default Toggle