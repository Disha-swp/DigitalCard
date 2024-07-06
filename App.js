import React from "react"
import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Footer from "./Components/Footer.js"

export default function App(){
    return(
        <div className="card">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}