// import { useState } from 'react'
import './WorkList.css'
import Work from './Work'
import { works } from '../data'

function WorkList({ work }) {

  return (
    <div ref={work} className='workList'>
      <div className="workList__title">
        <h1 data-aos='fade-up' data-aos-delay='100'>Create & inspires.</h1>
        <p data-aos='fade-up' data-aos-delay='200'>let's deep dive into my work</p>
      </div>
      <div className="workList__list">
        {works.map((items) => (
          <Work key={items.id} img={items.img} title={items.title} desc={items.desc} />
        ))}
      </div>
    </div>
  )
}

export default WorkList