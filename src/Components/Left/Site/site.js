// Links to resources that helped along the way.
// freecodecamp
// The Coding Train https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
// Do something with Unity. Hobby stuff!
// "Imagine if this had started with a good mock?"



import React from 'react'
import './site.css'

let Site = () => {
   return (
      <div className="site_container">
         <div className="website_details">
            <div className="website_details_title">
               
            </div>
            <div className="website_details_text">
               <div className="details_head">
                  Thanks for coming by!
               </div> 
               <div className="details_body">
                  A React SPA in two halves, this website is an exercise in intentful structure and organization, clean code, and a bit of design. I hope you like it. 
                  <br></br>
                  <br></br>
                  If I had to do it again, I'd make use of more semantic HTML (there may be a few divs) and Redux, my new sister-favorite in front end tech.
               </div>

            </div>
         </div>
         <div className="site_bottom">
            <div>
               Some credits
               <ul>
                  <li><span className="redtext"> Denis Klyuchnikov</span> - new window icon</li>
                  <li><a 
                     href="http://stevelosh.com/"
                     target="_blank" 
                     rel="noopener noreferrer"
                  >Steve Losh</a> - design inspiration</li>
                  <li><a 
                     href="https://www.brianatiyeh.com/"
                     target="_blank" 
                     rel="noopener noreferrer"
                  >Brian Atiyeh</a> - design inspiration</li>
                  <li><a 
                     href="http://colormind.io/"
                     target="_blank" 
                     rel="noopener noreferrer"
                  >Colormind</a> - color tools</li>
                  <li><a 
                     href="https://www.heropatterns.com"
                     target="_blank" 
                     rel="noopener noreferrer"
                  >heropatterns.com</a> - SVG textures</li>
               </ul>
            </div>
            <div>
               Made using
               <ul>
                  <li>React</li>
                  <li>create-react-app</li>
                  <li>Photoshop</li>
                  <li><a href="https://github.com/michalsnik/aos">animate on scroll</a></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Site