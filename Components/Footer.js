import React from "react"

function redirectToGitHub() {
    console.log("i am clicked")
    window.location.href = "https://github.com/Disha-swp";
}
export default function Footer(){
    return(
        <div className="footer">
            <img src="../Images/Twitter.png"/>
            <img onClick={redirectToGitHub} src="../Images/GitHub.png"/>
        </div>
    )
}
