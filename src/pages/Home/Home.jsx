import React,  { useEffect } from "react";
import LangBars from "../../components/Bars/LangBars";
import AffinityBars from "../../components/Bars/AffinityBars";
import Who from "../Who/Who";
import CV from "../CV/CV";
import Works from "../Work/Works";
import profilePicture from "../../assets/profile/10.26.00_87e200d3.webp";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler la page vers le haut lors du chargement du composant
  }, []);
  return (
    
    <div className="home" id="home">
      
      <div className="home__header">
        <div className="home__picture">
          <img src={profilePicture} alt="Y. GICQUEL" />
        </div>
        <div className="home__title">
          <h1 className="home__title--main">
            Yann GICQUEL, développeur web front-end
          </h1>

        </div>
      </div>

      <div className="home__skills">
        <AffinityBars />
        <LangBars />
      </div>

      <Who />
     
        <Works />
        <CV />
    </div>
  );
}

export default Home;
