import React, { useState } from 'react'
import './right.css'

import Projects from 'Components/Right/Projects/projects.js'
import Photography from 'Components/Right/Photography/photography.js'

let Right = () => {
   let [page, setPage] = useState(0)

   return (
      <div className="right_container">
         <div className="right_head">
            <div className="right_toggle_scene">
               <div className={ page === 0 ? 
                  "right_toggle_card" : 
                  "right_toggle_card is_flipped"}
               >
                  <div
                     className="toggle_projects_face noselect"
                     onClick={() => setPage(1)}
                  >
                     View Photography
                  </div>
                  <div
                     className="toggle_photography_face noselect"
                     onClick={() => setPage(0)}
                  >
                     View Projects
                  </div>
               </div>
            </div>
            <div className="right_head_text">
               {page === 0 ? 
                  <div> 
                     Projects live on sleepy servers. <br></br>
                     Please give them time to wake up if you want to visit.
                  </div>
                  :
                  <div> 
                     Thing about photographs. <br></br>
                     It's a clever thing.
                  </div>
               }
            </div>
         </div>
         {
            page === 0 ?
               <Projects /> :
               <Photography />
         }
      </div>
   )
}

export default Right