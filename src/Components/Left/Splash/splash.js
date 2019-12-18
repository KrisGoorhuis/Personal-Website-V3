import React, { useState } from 'react';
import './splash.css'


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
               hobbyist photographer & decent cook
               living out of the pacific northwest.
            </p>
            <p>I’d love to
               <a 
                  className="redtext" 
                  href="mailto:krisgoorhuis@gmail.com">
                  &nbsp; hear from you.
               </a>
            </p>
         </div>
      </div>
   )
}

export default Splash