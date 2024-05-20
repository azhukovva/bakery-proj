import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>

      {/* direction, type, delay, duration */}
      <motion.div variants={fadeIn('right', 'spring', '0.5*index', 0.75)}
        className='w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col justify-evenly items-center'
        >
          <img src={icon} alt="icon"
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-center text-[20px] font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overwiew.</h2>
      </motion.div>

      {/* direction, type, delay, duration */}
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quasi soluta exercitationem, cupiditate iure porro modi ipsum sed veniam fuga itaque nulla nihil,
        ab rerum, consequatur sapiente obcaecati illo facere quae! Minus corrupti, nobis sit aliquid
        ratione inventore laudantium soluta aliquam.
      </motion.p>

      {/* CARDS */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          // spread all of the props coming from the service we are currently looping over
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')