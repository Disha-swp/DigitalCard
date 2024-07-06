import React from "react"
import About from "./About.js"
import Interests from "./Interests.js"

export default function Main(){
    return(
        <div>
        <div className="name">Disha Swarup</div>
        <div className="job-name">Frontend Developer</div>
        <div className="website">dishaswarup.website</div>
        <div className="btn">
            <button className="btn1">
                <img width="15px"src= "../Images/Iconmail.png" />Email</button>
            <button className="btn2">
             <img className="img-2" width="15px" src= "../Images/linkedin.png" />LinkedIn</button>
        </div>
        <div className="main-body">
            <About/>
            <Interests/>
        </div>
        </div>
    )
}
