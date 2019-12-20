import React, { useState } from 'react';
import './splash.css'

import portrait from 'Assets/Images/portrait.jpg'
import portraitSmall from 'Assets/Images/portrait.jpg'
import forestPortrait from 'Assets/Images/portrait.jpg'

let Splash = () => {
   const [largeLoaded, setLargeLoaded] = useState(false)

   return (
      <div className="splash_container">
         <div className="top_container">
            <div className="portrait_container">
               <img
                  style={largeLoaded ? { display: 'none' } : {}}
                  src={forestPortrait}
                  alt="portrait"
                  onLoad={() => { setLargeLoaded(true) }}
               />
               <img
                  style={largeLoaded ? {} : { display: 'none' }}
                  src={forestPortrait}
                  alt="portrait"
               />
            </div>
            <div className="intro_container">
               <p>Hello,</p>
               <p>I’m Kris G.</p>
            </div>
         </div>
         <div className="intro_body">
            <p>
               I’m a web developer, snowboarder,
               hobbyist photographer & estranged coffee lover
               living out of the pacific northwest.
            </p>
            <p>
               Check out my work on 
               <a 
                  className="redtext" 
                  href="mailto:krisgoorhuis@gmail.com">
                  &nbsp;Github.
               </a>
               <br></br>
               Or perhaps 
               <a 
                  className="redtext" 
                  href="mailto:krisgoorhuis@gmail.com">
                  &nbsp;drop me a line.
               </a>
            </p>
         </div>
      </div>
   )
}

export default Splash