import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




function Footer() {
  return (
    <div>
      <span><a href="https://github.com/Lonewolfonrock" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></span>
      <span><a href="https://www.linkedin.com/in/anjesh-mainali-218070284/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></span>
      <span><a href="mailto:anjeshmainali348@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a></span>
    </div>

  )
}

export default Footer
