import React from 'react'
import './index.css'
import {Bio} from '../../data/costents.js'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'
import heroimg from '../../images/blog3.png'
import HeroBgAnimation from '../herobgAnimation/index.js'
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
const Hero = () => {  
  return (
    <div className='about'>
      <div className='heroContainer'>
        <div className='heroBg'><HeroBgAnimation/></div>
        <div className='heroInnerContainer'>
          {/* first section */}
          <div className='Heroleft'>
            <div className='title'>
              Hi, I am <br/>
              {Bio.name}
            </div>
            <div className='textloop'>
              I am a 
              <span className='herospan'>
                <Typewriter
                options={{
                  strings:Bio.roles,
                  autoStart:true,
                  loop:true,
                  // delay:true
                }}
                />
              </span>
            </div>
            <div className='discripction'> {Bio.description} </div>
            <ResumeButton  href={Bio.resume}>Check Resume</ResumeButton>

          </div>
          <div className='Heroright'>
          <img className='heroImg' src={heroimg} alt="img"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero