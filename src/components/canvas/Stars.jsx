import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Stars = () => {
  return (
    <div>Stars</div>
  )
}

const StarsCanvas = ( ) => {
  return (
    <div className='w-full h-full inset-0 z-[-1]'></div>
  )
}

export default StarsCanvas