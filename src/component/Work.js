import './Work.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function Work({ img, title, desc }) {
    const [modal, setModal] = useState(false);
    const [tempData, setTempData] = useState([]);

    const getData = (img, title, desc) => {
        let tempData = [img, title, desc];
        setTempData(item => [1, ...tempData]);

        return setModal(true);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = modal ? 'hidden' : '';
      }, [modal]);

    return (
        <>
            <div data-aos='fade-up' data-aos-delay='300'  className='work'>
                <img onClick={() => getData(img, title, desc)} src={img} alt='img' />
            </div>
            {modal ? <Modal img={tempData[1]} title={tempData[2]} desc={tempData[3]} setModal={setModal} /> : null}
        </>
    )
}

export default Work