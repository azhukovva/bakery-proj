import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* inset-0 is a shorthand for setting top-0, right-0, bottom-0, and left-0 all at once. */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#CFEC94]`}>
            Le Doux
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Exquisite Pastries & Baked Goods<br />Made with tendresse.
          </p>
        </div>
      </div>

      {/* Graphics */}
      {/* <ComputersCanvas /> */}

      {/* absolute = positioning in the middle */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{ y: [0, 24, 0] }} // Only y-axis
              transition={
                {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero