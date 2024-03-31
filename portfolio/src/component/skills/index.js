import React from 'react'
import {skills} from '../../data/costents.js'
import './style.css'
const Skills = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='skilltitle'>Skills</div>
        <div className='skilldiscripction'>Here are some of my skills on which i am working on for the past 2 years.</div>
        <div className='skillsContainer'>{skills.map((item)=> <div className='skill'>
            
            <div className='skillTitle'>{item.title}</div>
            <div className='skillist'>
                {item.skills.map((allSkill)=>  <div className='allskill'>
                      <img className='skillimg' src={allSkill.image} alt='icon'/>
                      {allSkill.name}
                  </div>
                )}
            </div>
          </div>
          
        )}</div>
      </div>
    </div>
  )
}

export default Skills