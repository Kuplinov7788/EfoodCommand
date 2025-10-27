import Pizza from "../assets/Pizza.png";
import vektor  from "../assets/Vector.png";
import fri  from "../assets/fri.png";
import Pizza2  from "../assets/pizza2.png";
import imgpizza from "../assets/pizzaimg.png";


const Islom = () => {
  return (
      <div className="main">
            <div className="wrapper">
        <h1>About us</h1>
        <p>
          In just a couple of years, we have opened 6 outlets in different
          cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we
          plan to develop the network in other major cities of Russia.
        </p>

        <img className="pizza" src={Pizza} alt="pizza" />

        <p>
          The kitchen of each point is at least: 400–500 sq. m. meters,
          hundreds of employees, smoothly performing work in order to
          receive/prepare/form/deliver customer orders on time.
        </p>
      </div>
       <img className="vektor" src={vektor} alt="pizza" />
        <img className="fri" src={fri} alt="pizza" /> 
          <div className="wrapper2">
      <img className="Pizza" src={Pizza2} alt="pizza" /> 
      </div>
      <img className="pizza2" src={imgpizza} alt="pizza" />
      </div>
  );
};

export default Islom;
