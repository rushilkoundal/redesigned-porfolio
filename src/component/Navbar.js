import React, { useState } from 'react';
import { useContext } from 'react'
import { ThemeContext } from '../Context';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Navbar.css';

function Navbar({ setShow, scrollToSection, work, about, Contact }) {
    const [toggle, setToggle] = useState(false);
    const closeMoileLinks = () => {
        setToggle(false);
    }

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <div className="navbar-desktop">
                <div className={darkMode ? 'navbar__dark' : 'navbar'}>
                    <div onClick={() => setShow(false)} className="logo">rk<span>design</span></div>
                    <div className="menu-links">
                        <ul>
                            <li onClick={() => scrollToSection(work)}>Work</li>
                            <li onClick={() => {
                                scrollToSection(about);
                                setShow(true)
                            }}>About</li>
                            <li onClick={() => scrollToSection(Contact)}>Contact</li>
                        </ul>
                    </div>
                    <div className='menu-icon' onClick={() => setToggle(!toggle)}>{toggle ? <CloseRoundedIcon fontSize='large' style={{ color: '#fff' }} /> : <SortRoundedIcon fontSize='large' style={{ color: 'white', cursor: 'pointer' }} />}</div>
                </div>
                <div className="social-links-desktop">
                    <a href="https://github.com/rushilkoundal" target='_blank' rel='noreferrer'><GitHubIcon fontSize='large' style={{ marginRight: '10px' }} /></a>
                    <a href="https://www.linkedin.com/in/rushil-koundal-14939b183/" target='_blank' rel='noreferrer'><LinkedInIcon fontSize='large' /></a>
                </div>
            </div>
            <div onClick={closeMoileLinks} style={{ background: darkMode ? '#4C3575' : '#6E00FF' }} className={toggle ? 'nav-menu active' : 'nav-menu'}>
                <ul style={{ marginTop: '30px' }}>
                    <li onClick={() => scrollToSection(work)} className='nav-item'>Work</li>
                    <li onClick={() => {
                        scrollToSection(about);
                        setShow(true)
                    }} className='nav-item'>About</li>
                    <li onClick={() => scrollToSection(Contact)} className='nav-item'>Contact</li>
                </ul>
                <div className="social-links">
                    <a href="https://github.com/rushilkoundal" target='_blank' rel='noreferrer'><GitHubIcon fontSize='large' style={{ marginRight: '10px' }} /></a>
                    <a href="https://www.linkedin.com/in/rushil-koundal-14939b183/" target='_blank' rel='noreferrer'><LinkedInIcon fontSize='large' /></a>
                </div>
            </div>
        </>
    )
}

export default Navbar