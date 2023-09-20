import Photo from "../assets/sajad-nori-s1puI2BWQzQ-unsplash.jpg"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'



function Bio() {
  return (
    <div>
      <img src={Photo} id="Cat_img"/>
      <h1>Anjesh Mainali</h1>
      <p id="job-title">Full Stack Developer</p>
      <p id="userweb">Anjesh Website</p>
      <div className="Button_container">
        <button><FontAwesomeIcon icon={faEnvelope}/>  Email</button>
        <button className="Linkedin"><FontAwesomeIcon icon={faLinkedin} />  Linkedin</button>
      </div>
    </div>
  );
}

export default Bio;
