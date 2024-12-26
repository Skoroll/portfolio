import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import myWorks from "../../my-works/myWorks.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import NotFound from "../NotFound/NotFound";
import "./WorksDetails.scss";

function WorkDetail() {
  const { id } = useParams();
  const work = myWorks.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!work) {
    return <NotFound />;
  }

  return (
    <div className="work-detail">
      <h2>{work.name}</h2>
      <div className="work-detail__container">
        <div className="work-detail__img-container">
          <Carrousel images={work.images} />
        </div>
        <div className="work-detail__img-mobile">
          <img src={work.images[0]} alt={work.name} />
        </div>
        <div className="work-detail__text">
          {work.link !== null &&
            <p> 
              <span className="work-detail__text--heading"> 
                  Lien : 
              </span>
              <a href={work.link}> 
                {work.name}
              </a> 
            </p>
          }

          <p>
            <span className="work-detail__text--heading">Pourquoi :</span>{" "}
            <br/>
            <span dangerouslySetInnerHTML={{ __html: work.why }} />
          </p>
         <p>
         <span className="work-detail__text--heading">Besoin :</span>{" "}
         <br/>
         <span dangerouslySetInnerHTML={{ __html: work.need }} />
         </p>

         <p>
         <span className="work-detail__text--heading">Solution :</span>{" "}
         <br/>
         <span dangerouslySetInnerHTML={{ __html: work.solution }} />
         </p>

          <p className="work-detail__tools">
            <span className="work-detail__text--heading">Outils :</span>
            <br/>
            <span className="work-detail__tools--details">
            {work.tools.split(", ").map((tool, index) => (
              <span key={index} className="tool">
                {tool}
              </span>
       
            ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
