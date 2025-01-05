import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";

export const Character = () => {
  const [moveCharacter, moveApi] = useSpring(() => ({
    from: { y: 0 },
    to: { y: 30 },
    config: { duration: 7000 },
    loop: { reverse: true },
  }));

  const [changeSize, sizeApi] = useSpring(() => ({
    from: { scale: 1, x: 0, y: 0 },
    to: { scale: 1.01, x: 0, y: 0 },
    config: { duration: 1000 },
  }));

  const [opacity, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  }));

  return {
    /* <ParallaxLayer sticky={{ start: 0.4, end: 1.5 }} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> 
      <ParallaxLayer sticky={{ start: 0.4, end: 1 }} className={"layerIMG character"}>
        <animated.img className={"imgC"} src="/img/girl.png" style={{ ...opacity, ...changeSize, ...moveCharacter }} />
      </ParallaxLayer>*/
  };
};
