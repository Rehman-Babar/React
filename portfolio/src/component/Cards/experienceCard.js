import React from 'react'
import './experience.css'
const ExperienceCard = ({experiences}) => {
  return (
    <div className='card'>
      <div className='top'>
        <img alt='companyLogo' className='topimg' src={experiences.img}/>
        <div className='expbody'>
          <div className='role'>{experiences.role}</div>
          <div className='company'>{experiences.company}</div>
          <div className='duration'>{experiences.date}</div>
        </div>
      </div>
      <div className='cardDescription'>{experiences.desc}</div>
      <a href={experiences.doc} target='new'>
      <div className='Document'/>
      </a>
      <div className='top'></div>
    </div>
  )
}

export default ExperienceCard