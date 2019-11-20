import React from 'react'
import './me.css'
import testRes from 'Assets/resume.pdf'

let Me = () => {
   return (
      <div className="me_container">
         <div className="me_top_box">
            <div className="me_head">
               Someone once told me my favorite puzzle game was essentially a 
               programming challenge. 
            </div>              
            <div className="me_placeholder"></div>
            <div className="me_segment">
               The instant I finished my first little word-reversing script I knew how right they were. 
               When my head isn't buried in the codesand, I enjoy learning French, talking about games more than playing them, 
               learning to cook, and exploring the forest next door.
               <br></br>
               <br></br>
               I'm eager to begin this career in earnest and find out first-hand what web technology is to become.
            </div>   
         </div>
         <div className="me_footer">
            If you're enjoying the practical half of my resume and wand to see the theory, &nbsp; 
            <a 
            href={testRes} 
            target="_blank" 
            rel="noopener noreferrer">
               grab it here
            </a>.
         </div>
      </div>
   ) 
}

export default Me