import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { heart, fullfiled } from '../assets'

import { SectionWrapper } from '../hoc'
import { events } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const EventCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className='bg-secondary p-5 rounded-2xl sm:w-[500px] w-full shadow-lg'>
      <div className='relative w-full' style={{ height: '230px', overflowY: 'auto', overflowX: 'hidden' }}>
        <img src={image} alt={name}
          className='w-full h-full object-cover rounded-2xl' />
        <div
          className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={handleClick}
            className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={isClicked ? fullfiled : heart} alt="heart"
              className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
      </div>



      <div className='mt-5 h-[150px] overflow-y-auto'>
        <h3 className='text-primary font-bold text-[24px]'>{name}</h3>
        <div className='mt-2 text-black-100 text-[14px]'>
          {events.map((event) => (
            Array.isArray(event.points)
              ? event.points.map((point) => <p>{point}</p>)
              : <p>{event.points}</p>
          ))}
        </div>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag, index) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Our community</p>
        <h2 className={styles.sectionHeadText} style={{ color: '8D0E6A' }}>Events.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis nemo sed molestias, laboriosam dolorem minus itaque id ratione soluta! Quos, sunt magni provident
          odio iusto earum inventore excepturi atque quas.
          Quaerat blanditiis vero repellendus! Facere quas illum eos perspiciatis autem animi cum quisquam voluptatem,
          doloribus quidem accusantium porro sapiente similique!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {events.map((event, index) => (
          <EventCard
            key={`event-${index}`}
            index={index}
            {...event}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')