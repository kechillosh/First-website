import Tm from "../assets/Piața_Victoriei_Timișoara.jpg";
import "../styles/Locations.css";
import Cluj from "../assets/cluj-napoca-1.jpg";
import Brasov from "../assets/brasov-old-town.jpg";
import Iasi from "../assets/iasi-romania.jpg";
import Constanta from "../assets/const.jpg";
import Ploiesti from "../assets/Ploiesti-Halele-10.jpg";
import Arad from "../assets/primaria-veche-arad.jpg";
import Sibiu from "../assets/Sibiu_15257629580.jpg";
import TgMures from "../assets/Targu-Mures-1.jpg";

export const Locations = () => {
  return (
    <div className="MainLoc">
      <div>
        <h1>Top Locations</h1>
      </div>
      <div className="Box">
        <p>Timisoara</p>
        <img src={Tm} alt="Timisoara" />
      </div>
      <div className="Box">
        <p>Cluj</p>
        <img src={Cluj} />
      </div>
      <div className="Box">
        <p>Brasov</p>
        <img src={Brasov} alt="Timisoara" />
      </div>
      <div className="Box">
        <p>Iasi</p>
        <img src={Iasi} alt="Timisoara" />
      </div>
      <div className="Box">
        <p> Constanta</p>
        <img src={Constanta} alt="Timisoara" />
      </div>
      <div className="Box">
        <p> Arad</p>
        <img src={Arad} alt="Timisoara" />
      </div>
      <div className="Box">
        <p> Ploiesti</p>
        <img src={Ploiesti} alt="Timisoara" />
      </div>
      <div className="Box">
        <p>Sibiu</p>
        <img src={Sibiu} alt="Timisoara" />
      </div>
      <div className="Box">
        <p>Târgu Mureș</p>
        <img src={TgMures} alt="Timisoara" />
      </div>
    </div>
  );
};

export default Locations;
