import React, {useState} from 'react'
import './style.css'
import styled from 'styled-components';
import ProjectCard from '../Cards/projectCard';
import {projects} from '../../data/costents.js'
const ToggleBtn = styled.div`
${({active,theme})=> active && `
background-color: ${theme.primary+20};
`}
`;
const Projects = () => {
    const [toglle, settoglle] = useState('all')
    return (
    <div>
        <div className='container' id='projects'>
            <div className='wrapper'>
                <div className='title'>Projects</div>
                    <div className='discripction'>I have worked on a range of projects. Here are some of my projects.</div>
                    <div className='toggleGroup'>
                        {toglle === 'all' ? (
                            <ToggleBtn onClick={()=>settoglle('all')} className='toggleBTN' active value={'all'}>ALL</ToggleBtn>
                        ): (<ToggleBtn onClick={()=>settoglle('all')} className='toggleBTN'  value={'all'}>ALL</ToggleBtn>)}
                        
                        <div className='Divider'></div>
                        {toglle === 'web app' ? (<ToggleBtn active onClick={()=>settoglle('web app')}  className='toggleBTN'>WEB APP'S</ToggleBtn>)
                        :(<ToggleBtn value={'web app'} onClick={()=>settoglle('web app')} className='toggleBTN'>WEB APP'S</ToggleBtn>)}
                        

                        <div className='Divider'></div>
                        {toglle === 'pwa web app' ? (<ToggleBtn onClick={()=>settoglle('pwa web app')} value={'pwa web app'} active className='toggleBTN'>PWA ANDROID APP'S</ToggleBtn>)
                        :( <ToggleBtn onClick={()=> settoglle('pwa web app')} className='toggleBTN'>PWA ANDROID APP'S</ToggleBtn>)}
                        
                        <div className='Divider'></div>
                        {toglle === 'mation learning' ? (<ToggleBtn onClick={()=>settoglle('mation learning')} active className='toggleBTN'>MATION LEARNING</ToggleBtn>)
                        :(<ToggleBtn onClick={()=>settoglle('mation learning')} className='toggleBTN'>MATION LEARNING</ToggleBtn>)} 
                        
                    </div>
                    <div className='cardContainer'>
                        {toglle === 'all' && projects.map((project)=> <ProjectCard>{project}</ProjectCard>)}
                        
                    </div>
                </div>
                </div>
    </div>
    )
}

export default Projects