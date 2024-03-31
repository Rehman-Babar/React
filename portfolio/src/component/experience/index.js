import React from 'react'
import './style.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {experiences} from '../../data/costents.js'
import ExperienceCard from '../Cards/experienceCard.js';
const Experience = () => {
  return (
    <div className='container' id='experience'>
    <div className='wrapper'>
        <div className='exptitle'>Experience</div>
        <div className='expdiscripction'>Here are some of my projects.</div>

        <section className='timeLineSection'>
          <Timeline className='timeLine'>
            {experiences.map((experiences, index) =><TimelineItem className='timeLineItem'>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='secondary'/>
                  {index !== experiences.length -1 && <TimelineConnector/>}
                </TimelineSeparator>
                <TimelineContent sx={{py:'12px', px:'2'}}>
                  <ExperienceCard experiences={experiences}/>
                </TimelineContent>
              </TimelineItem>
            )}
          </Timeline>
        </section>
    </div>
    </div>
  )
}

export default Experience