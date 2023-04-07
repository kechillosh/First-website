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
import { Link, useHistory } from "react-router-dom";

export const Locations = () => {
  return (
    <div className="MainLoc">
      <div>
        <h1>Top Locations</h1>
      </div>
      <div className="Box">
        <p>Timisoara</p>
        <Link to="/CheckoutForm">
          <img src={Tm} alt="Timisoara" />
        </Link>
      </div>
      <div className="Box">
        <p>Cluj</p>
        <Link to="/CheckoutForm">
          <img src={Cluj} />
        </Link>
      </div>
      <div className="Box">
        <p>Brasov</p>
        <Link to="/CheckoutForm">
          <img src={Brasov} alt="Timisoara" />
        </Link>
      </div>
      <div className="Box">
        <p>Iasi</p>
        <Link to="/CheckoutForm">
          <img src={Iasi} alt="Timisoara" />
        </Link>
      </div>
      <div className="Box">
        <p> Constanta</p>
        <Link to="/CheckoutForm">
          <img src={Constanta} alt="Timisoara" />
        </Link>
      </div>
      <div className="Box">
        <p> Arad</p>
        <Link to="/CheckoutForm">
          <img src={Arad} alt="Timisoara" />
        </Link>
      </div>
      <div className="Box">
        <p> Ploiesti</p>
        <Link to="/CheckoutForm">
          <img src={Ploiesti} alt="Timisoara" />
        </Link>
      </div>
      <div className="Box">
        <p>Sibiu</p>
        <Link to="/CheckoutForm">
          <img src={Sibiu} alt="Timisoara" />
        </Link>
      </div>
      <div className="Box">
        <p>Târgu Mureș</p>
        <Link to="/CheckoutForm">
          <img src={TgMures} alt="Timisoara" />
        </Link>
      </div>
    </div>
  );
};

export default Locations;
