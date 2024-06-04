import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#CFEC94', color: '#353E26' }}
    contentArrowStyle={{ borderRight: '10px solid  #CFEC94' }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex items-center justify-center mt-[5px]'>
        <img
          src={experience.icon}
          alt={experience.title}
          className='object-cover self-center w-[45px]'
        />
      </div>}
  >
    <div>
      <h3 className='text-primary text-[24px] font-bold'>{experience.title}</h3>

      <ul className='mt-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#27113D] text-[14px] pl-1 tracking-wider '
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >How it started</p>
        <h2 className={styles.sectionHeadText}>Our history.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')