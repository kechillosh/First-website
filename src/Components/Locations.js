import Tm from "../assets/Piața_Victoriei_Timișoara.jpg";
import "../styles/Locations.css";
import Cluj from "../assets/cluj-napoca-1.jpg";
import Brasov from "../assets/brasov-old-town.jpg";
import Iasi from "../assets/iasi-romania.jpg";

export const Locations = () => {
  return (
    <div className="MainLoc">
      <div>
        <h1>Top Locations</h1>
      </div>
      <div>
        Timisoara
        <img src={Tm} alt="Timisoara" />
      </div>
      <div className="Cluj">
        Cluj
        <img src={Cluj} />
      </div>
      <div>
        Brasov
        <img src={Brasov} alt="Timisoara" />
      </div>
      <div>
        Iasi
        <img src={Iasi} alt="Timisoara" />
      </div>
    </div>
  );
};

export default Locations;
