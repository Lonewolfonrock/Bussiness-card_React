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
        <button><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:anjeshmainali348@gmail.com"> Email</a></button>
        <button className="Linkedin"><FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/anjesh-mainali-218070284/" id="a1" target="_blank"> Linkedin</a></button>
      </div>
    </div>
  );
}

export default Bio;
