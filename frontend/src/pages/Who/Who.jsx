import React from "react";
import Collapse from "../../components/Collapses/Collapses"; // Import du composant Collapse
import collapseData from "../../components/Collapses/CollapseData";

function Who() {
  // Divisez les collapses en deux groupes
  const firstGroup = collapseData.slice(0, Math.ceil(collapseData.length / 2));
  const secondGroup = collapseData.slice(Math.ceil(collapseData.length / 2));

  return (
    <div className="who fade-in" id="who">
      <h2>Qui suis-je ?</h2>

      <div className="who__collapse">
        {/* Première section de collapses */}
        <div className="who__collapse--group">
          {firstGroup.map((collapse, index) => (
            <Collapse
              key={index}
              title={collapse.title}
              content={collapse.content}
            />
          ))}
        </div>

        {/* Deuxième section de collapses */}
        <div className="who__collapse--group">
          {secondGroup.map((collapse, index) => (
            <Collapse
              key={index + firstGroup.length} // Clé unique
              title={collapse.title}
              content={collapse.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Who;
