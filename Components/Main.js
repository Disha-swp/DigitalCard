import React from "react"
import About from "./About.js"
import Interests from "./Interests.js"

function sendEmail() 
{
    window.location = "mailto:dishaswarup@gmail.com";
}
function redirectToLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/disha-swarup-810a06197/";
}
export default function Main(){
    return(
        <div>
        <div className="name">Disha Swarup</div>
        <div className="job-name">Frontend Developer</div>
        <div className="website">dishaswarup.website</div>
        <div className="btn">
            <button onClick={sendEmail} className="btn1">
                <img width="15px"src= "../Images/Iconmail.png" />Email</button>
            <button onClick={redirectToLinkedIn}className="btn2">
             <img className="img-2" width="15px" src= "../Images/linkedin.png" />LinkedIn</button>
        </div>
        <div className="main-body">
            <About/>
            <Interests/>
        </div>
        </div>
    )
}
