import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import img from './Document_from_Alin_Joe____2_-removebg-preview.png'

import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [ 'l', 'i', 'n', ' ', 'J', 'o','e']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  
    // Cleanup function (optional)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  
  
 
  return (
   
      <div className="container home-page">
        <div className="text-zone">
          <h1>hi,<br/>I am 
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
         <path d="M10 90 L50 10 L90 90 Z" fill="none" stroke="black" strokeWidth="10" />
         </svg>

         <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
              
            />
            </h1>
        <Link to="/contact" className="flat-button">
            CONTACT ME
        </Link>
         
          <img className="dot" src={img} alt="Image" />

          <Loader type="pacman" />
      
          </div>
         
      </div>

     
  )
}

export default Home