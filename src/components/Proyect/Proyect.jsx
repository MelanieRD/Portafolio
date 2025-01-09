import { animated } from "@react-spring/web";
import "./Proyect.css";

export const Proyect = () => {
  const Img = "/img/catProyect.jpeg";
  const proyectName = "PetMyProductivity";
  const Description = "A productivity app for cats";
  const categoty = "Web | minigame";
  const Technologies = ["React", "Node", "Express", "MongoDB"];
  const Github = "Url";
  return (
    <animated.div className={"proyectContainer"}>
      <div className="proyectCenter" style={{ backgroundColor: "red", position: "relative" }}>
        <div className="proyectName" style={{}}>
          <h4>{proyectName}</h4>
        </div>

        <img src={Img} alt="" />
        <div className="proyectDetails">
          <p>{Description}</p>
          <p>
            Category: {categoty} <a href={Github}>Github</a>
          </p>

          <div className="technologies"></div>
        </div>
      </div>
    </animated.div>
  );
};
