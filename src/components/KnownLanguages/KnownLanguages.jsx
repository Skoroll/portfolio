import React from "react";
import "./KnownLanguages.scss"

function KnownLanguage(){
    return(
        <div className="home__languages">
            <h2>Langages connus : </h2>

            <ul>
                <li>HTML</li>
                <li>CSS/SASS</li>
                <li>Tailwind</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
            </ul>
        </div>
    )
}

export default KnownLanguage