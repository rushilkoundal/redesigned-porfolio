import { useContext } from 'react'
import { ThemeContext } from '../Context';
import './Hero.css'

function Hero({ scrollToSection, work }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
            <div className={darkMode ? 'hero__dark' : 'hero'}>
                <div className="hero-text">
                    <h1>Let's just start Explore Think and <span>Design It.</span></h1>
                    <p>Find My Work <span onClick={() => scrollToSection(work)}>Here</span></p>
                    <div className="scroll">
                        <svg width="46" height="60" viewBox="0 0 46 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="3.5" width="39" height="91" rx="19.5" stroke="white" strokeWidth="7" />
                            <circle className='scroll-down' cx="23" cy="24" r="11" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="pattern">
                    <svg width="439" height="438" viewBox="0 0 439 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="293" y="149" width="146" height="145" rx="15" fill="#6700EE" />
                        <rect x="293" y="3" width="146" height="146" rx="15" fill="#4D01B0" />
                        <rect x="146" y="3" width="147" height="146" rx="15" fill="white" />
                        <rect x="146" y="292" width="147" height="146" rx="15" fill="white" />
                        <rect y="146" width="146" height="146" rx="15" fill="white" />
                        <rect width="146" height="146" rx="73" fill="#EC51F7" />
                        <rect y="292" width="146" height="146" rx="73" fill="#EC51F7" />
                        <rect x="146" y="147" width="147" height="145" rx="72.5" fill="#04FFE1" />
                        <rect x="293" y="292" width="146" height="146" rx="15" fill="#9551EF" />
                    </svg>
                </div>
            </div>
    )
}

export default Hero