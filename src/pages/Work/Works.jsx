import React from "react";
import myWorks from "../../my-works/myWorks.json";
import WorksCards from "../../components/WorksCards/WorksCards";

function Works() {
  return (
    <div className="works">
        <h2>Les travaux</h2>
        <p className="section--heading">Mes projet de formations proviennents tous d'<a target="_blank" rel="noreferrer"  href="https://openclassrooms.com/fr/paths/899-developpeur-web">OpenClassRooms</a></p>
      <div className="works__list">
        <ul className="works--ul">
          {myWorks.map((works) => (
            <WorksCards key={works.id} works={works} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Works;
