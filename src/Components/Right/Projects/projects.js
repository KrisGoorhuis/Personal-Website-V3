import React, { useState } from 'react'
import './projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import beerBrowser from 'Assets/Images/beer-browser.png'
import beerBrowserSmall from 'Assets/Images/beer-browser-small.jpg'
import chatApp from 'Assets/Images/chat-app.png'
import chatAppSmall from 'Assets/Images/chat-app-small.jpg'
import dataViz from 'Assets/Images/data-visualization.png'
import dataVizSmall from 'Assets/Images/data-visualization-small.jpg'
import snakeGame from 'Assets/Images/snake-game.png'
import snakeGameSmall from 'Assets/Images/snake-game-small.jpg'
import eddyCopy from 'Assets/Images/the-eddy-copy.png'
import eddyCopySmall from 'Assets/Images/the-eddy-copy-small.jpg'
import unityGame from 'Assets/Images/unity-game.png'
import unityGameSmall from 'Assets/Images/unity-game-small.jpg'
import minesweeper from 'Assets/Images/minesweeper.png'
import minesweeperSmall from 'Assets/Images/minesweeper-small.jpg'
import movieBuddy from 'Assets/Images/movie-buddy.png'
import gameOfLife from 'Assets/Images/game-of-life.png'
import dashboard from 'Assets/Images/dashboard.png'

import githubMark from 'Assets/Images/github-mark.png'
import newWindowIcon from 'Assets/Images/open-link-white.png'

let IndividualProject = (props) => {
   const [largeLoaded, setLargeLoaded] = useState(false)

   return (
      <React.Fragment>
         <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top"
            data-aos-mirror="true"
            className={props.className}
         >
            <div className="links_container">
               <div className="links_container_left">
                  {props.githubLink ?
                     <a target="_blank" rel="noopener noreferrer"
                        href={props.githubLink}
                     >
                        <img
                           className="github_link"
                           src={githubMark}
                           alt="github 'mark' logo"
                        />
                     </a>
                     :
                     <div>&nbsp;--&nbsp;</div>
                  }
                  {props.liveSite ?
                     <a target="_blank" rel="noopener noreferrer"
                        href={props.liveSite}
                     >
                        <img
                           className="outside_link"
                           src={newWindowIcon}
                           alt="outside link"
                        />
                     </a>
                     :
                     <div>--&nbsp;</div>
                  }
               </div>
               {/* <div>up</div> */}
            </div>
            <div className="project_images">
               <img
                  style={largeLoaded ? { display: 'none' } : {}}
                  className="image_small"
                  src={props.imageSmall}
                  alt="Temporary tiny placeholder"
               />
               <a href={props.liveSite} target="_blank" rel="noopener noreferrer">
                  <img
                     style={largeLoaded ? {} : { display: 'none' }}
                     className="image_large"
                     src={props.imageLarge}
                     alt="Full resolution project shot"
                     onLoad={() => setLargeLoaded(true)}
                  />
               </a>
            </div>
            <div className="bottom_container">
               <h2 className="project_title">{props.title}</h2>
               <p className="project_description">{props.description}</p>
               <ul className="project_technologies_list">
                  //
                  {
                     props.technologies &&
                     props.technologies.map( (tech, i) => 
                        <li className="project_technology_listing code" key={i}><code>{tech}</code></li>
                     )
                  }
               </ul>
            </div>
         </div>
      </React.Fragment>
   )
}



let Projects = (props) => {
   let [projectsLoading, setProjectsLoading] = useState(true)

   AOS.init();

   return (
      <React.Fragment>
         {/* The onload here is what's causing lower projects to flicker onto screen. */}
         {
            projectsLoading &&
            <div className="spinner">Stand by... </div>
         }
         <div className="projects_container" onLoad={() => setProjectsLoading(false)}>
            
            <IndividualProject 
               title="Game of Life"
               className="individual_project_container"
               description="John Conway's Game of Life. Click tiles to generate life, watch it age, and fiddle with the parameters of its existence. Complex state flow and an intentful eye on semantic HTML."
               imageLarge={gameOfLife}
               imageSmall={gameOfLife}
               githubLink="https://github.com/KrisGoorhuis/game-of-life-redux"
               liveSite="https://kg-game-of-life-redux.herokuapp.com/"
               technologies={['React.js', 'Redux', 'Semantic HTML']}
            />
            <IndividualProject 
               title="Movie Buddy (maybe)"
               className="individual_project_container"
               description="Movie suggestion engine. Uses React & Redux to wire up The Movie Database's API, run user selections through a suggestion algorithm, and display recommendations."
               imageLarge={movieBuddy}
               imageSmall={movieBuddy}
               githubLink="https://github.com/KrisGoorhuis/movie-buddy"
               liveSite="https://kg-movie-app.herokuapp.com/"
               technologies={['React.js', 'Redux', 'API', 'AJAX']}
            />
            <IndividualProject
               title="Minesweeper"
               className="individual_project_container"
               description="Full replication in C# and Windows Presentation Foundation. Features customizable area and mine density, flagging, and smiley faces."
               imageLarge={minesweeper}
               imageSmall={minesweeperSmall}
               githubLink="https://github.com/KrisGoorhuis/WPF-Minesweeper"
               liveSite=""
               technologies={['C#', 'WPF']}
            />
            <IndividualProject
               title="Dashboard to Nerdiness (WIP)"
               className="individual_project_container"
               description="A poorly styled but technically noteworthy content aggregation site. Collates data from different APIs, in different formats, into a single iterable array, and persistently stores preferences."
               imageLarge={dashboard}
               imageSmall={dashboard}
               githubLink="https://github.com/KrisGoorhuis/dashboard-to-nerdiness"
               liveSite="https://dashboard-to-nerdiness.herokuapp.com/"
               technologies={['React.js', 'Redux', 'API', 'AJAX']}
            />
            <IndividualProject
               title="Beer Style Guide"
               className="individual_project_container"
               description="Terse React mapping a single large JSON object. Custom scratch-configured webpack integrating SASS and Babel."
               imageLarge={beerBrowser}
               imageSmall={beerBrowserSmall}
               githubLink="https://github.com/KrisGoorhuis/beer-browser"
               liveSite="https://beer-style-guide.herokuapp.com/"
               technologies={['React.js', 'Babel', 'Webpack', 'API']}
            />
            <IndividualProject
               title="Secret Unity Things"
               className="individual_project_container"
               description="A hobby project I'd like to eventually sell and bring to Android. A private-for-now playground for C# and the Unity engine I jump back into when time allows."
               imageLarge={unityGame}
               imageSmall={unityGameSmall}
               technologies={['C#', 'Unity']}
            />
            <IndividualProject
               title="Chat App"
               className="individual_project_container"
               description="My first foray into React. It integrates a MongoDB database of my own make, storing chat history and allowing for private conversations, notifications, and login-free unique IDs."
               imageLarge={chatApp}
               imageSmall={chatAppSmall}
               githubLink="https://github.com/KrisGoorhuis/chat-app"
               liveSite="https://krisg-chat-app.herokuapp.com/"
               technologies={['React.js', 'REST', 'Node.js', 'MongoDB']}
            />       
            <IndividualProject
               title="Temperature Data Visualization"
               className="individual_project_container"
               description="Another colossal JSON object pulled apart and mapped (a favorite thing of mine). This time presented with the D3 visualization library."
               imageLarge={dataViz}
               imageSmall={dataVizSmall}
               githubLink="https://github.com/KrisGoorhuis/data-visualization-temperature"
               liveSite="https://krisg-data-visualization-temp.herokuapp.com/"
               technologies={['D3.js']}
            />
            <IndividualProject
               title="Copy of The Eddy's old site"
               className="individual_project_container"
               description="Using someone else's work as more or less a mock, this is a recreation using original CSS and assets. Design is not my strongest suit, but I do like mocks."
               imageLarge={eddyCopy}
               imageSmall={eddyCopySmall}
               githubLink="https://github.com/KrisGoorhuis/the-eddy-copy"
               liveSite="https://krisg-theeddy-practicecopy.herokuapp.com/"
               technologies={['SASS']}
            />
            <IndividualProject
               title="Snake Game"
               className="individual_project_container"
               description="An early javascript passion project - a recreation of the classic snake game. Includes selectable stages, score counter, and, most importantly, your character is patterned after a coral snake."
               imageLarge={snakeGame}
               imageSmall={snakeGameSmall}
               githubLink="https://github.com/KrisGoorhuis/snake-game"
               liveSite="https://krisg-snake-game.herokuapp.com/"
               technologies={['Javascript', 'HTML Canvas']}
            />
         </div>
      </React.Fragment>
   )
}

export default Projects