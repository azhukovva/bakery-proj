import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>

      {/* direction, type, delay, duration */}
      <motion.div variants={fadeIn('right', 'spring', '0.5*index', 0.75)}
        className='w-full rounded-[20px] p-[1px] '
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
          className='bg-[#CFEC94] rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col justify-evenly items-center shadow-lg'
        >
          <img src={icon} alt="icon"
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-black-100 text-center text-[20px] font-bold'>{title}</h3>
          {/* //TODO - Add anchor to the specific product */}
          <a className='text-primary text-center text-[15px] italic cursor-pointer'>Learn More</a>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What we are proud of</p>
        <h2 className={styles.sectionHeadText} style={{color: "#FFC0ED"}}>About Us.</h2>
      </motion.div>

      {/* direction, type, delay, duration */}
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[22px] max-w-3xl leading-[35px]'
      >
        It is the story of two friends who missed honest artisan pastries so much that they decided to make them themselves. 
        We draw on the traditional recipes of the French master bakers, but we still carefully tweak each piece until it's perfect. 
        The pastries are then baked throughout the day until closing time. So you can still have a warm loaf of bread for dinner. 
        What we don't sell we don't throw away, we donate to charity.
      </motion.p>

      {/* CARDS */}
      <p className='mt-20 text-[#CFEC94] text-[27px] max-w-3xl'>Our Bestsellers</p>
      <div className='mt-5 flex flex-wrap gap-10'>
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