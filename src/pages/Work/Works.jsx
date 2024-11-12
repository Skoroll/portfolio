import React from "react";
import myWorks from "../../my-works/myWorks.json";
import WorksCards from "../../components/WorksCards/WorksCards";

function Works() {
  return (
    <div className="works">
        <h2>Travaux</h2>
      <div className="works__list">
        <div className="works--list">
          {myWorks.map((works) => (
            <WorksCards key={works.id} works={works} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
