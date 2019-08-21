import React, { useState } from 'react';
import './splash.css'

import portrait from 'Assets/Images/portrait.jpg'
import portraitSmall from 'Assets/Images/portrait.jpg'

let Splash = () => {
   const [largeLoaded, setLargeLoaded] = useState(false)

   return (
      <div className="splash_container">
         <div className="top_container">
            <div className="portrait_container">
               <img
                  style={largeLoaded ? { display: 'none'} : {} }
                  src={portrait}
                  alt="portrait"
               />
               <img 
                  style={largeLoaded ? {} : { display: 'none' }}
                  src={portraitSmall}
                  alt="portrait"
               />
            </div>

         </div>
         <p>Hey there, I’m <span className="colored_text">Kris G.</span></p>
         <p>
            I’m a programmer, snowboarder,
            hobbyist photographer & incognito(ish) nerd
            living out of the pacific northwest.
         </p>
         <p>I’d love to <a href="mailto:krisgoorhuis@gmail.com">hear from you.</a></p>
      </div>
   )
}

export default Splash