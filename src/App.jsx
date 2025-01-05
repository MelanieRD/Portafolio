import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useInView, useScroll, useSpring } from "@react-spring/web";
import { Tech } from "./components/Tech/Tech";

function App() {
  const [xcharacterCurrentPosition, setXCharacterCurrentPosition] = useState(0);
  const [ycharacterCurrentPosition, setYCharacterCurrentPosition] = useState(0);
  const [characterCurrentSize, setCharacterCurrentSize] = useState(1.3);
  const [toggle, setToggle] = useState(true);

  const containerRef = useRef(null);
  const characterRef = useRef(null);
  const [refInView, ApiInView] = useInView({
    rootMargin: "0px 0px 0px 0px",
  });

  const [refOpacityScroll, opacityScroll] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: { duration: 200 },
    }),
    {
      rootMargin: "50% 0%",
    }
  );

  const gradientBg = useSpring({
    background: toggle ? "linear-gradient(120deg, #1c2754 0%,rgb(71, 19, 69) 100%)" : "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    config: { duration: 1000 },
  });

  const [opacity, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  }));

  const [moveCharacter, moveApi] = useSpring(() => ({
    from: { x: xcharacterCurrentPosition, y: ycharacterCurrentPosition },
    to: { y: 30 },
    config: { duration: 7000 },
    loop: { reverse: true },
  }));

  const [rotate, rotateApi] = useSpring(() => ({
    from: { rotate: 0, scale: 1, y: 0 },
    to: { rotate: 10, scale: 1.08, y: 30 },
    config: { duration: 12000 },
    loop: { reverse: true },
  }));

  const [cloud1, cloud1Api] = useSpring(() => ({
    from: { y: 0, scale: 1 },
    to: { y: 10, scale: 1.1 },
    config: { duration: 10000 },
    loop: { reverse: true },
  }));

  const [cloud2, cloud2Api] = useSpring(() => ({
    from: { y: 0, scale: 1 },
    to: { y: 10, scale: 1.1 },
    config: { duration: 8000 },
    loop: { reverse: true },
  }));

  const [characterSize, sizeApi] = useSpring(() => ({
    from: { scale: 1.3, x: xcharacterCurrentPosition, y: ycharacterCurrentPosition },
    onChange: (ev) => {
      setCharacterCurrentSize(ev.value.scale), setXCharacterCurrentPosition(ev.value.x), setYCharacterCurrentPosition(ev.value.y);
    },
    to: { scale: 1.2, x: xcharacterCurrentPosition, y: ycharacterCurrentPosition },
    config: { duration: 1000 },
  }));

  const handleScroll = () => {
    let current = containerRef.current.current || 0;
    const bgcolor = "#1c2754";
    const limitScaleUp = 1.2;
    const limitScaleDown = 0.8;

    let newScale = 1 - current / 1000;

    let positionX = -current * 2.5;
    let positionY = current * 0.5;

    //console.log("scale:" + newScale);

    //console.log(characterRef.current);

    if (newScale <= limitScaleUp && newScale > limitScaleDown) {
      if (newScale >= 0.9) {
        newScale = limitScaleUp;
      }

      // console.log("position : " + current);

      if (current >= 99) {
        positionX = -600;
      }

      sizeApi.start({ from: { scale: characterCurrentSize, x: xcharacterCurrentPosition, y: ycharacterCurrentPosition }, to: { scale: newScale, x: positionX, y: positionY } });
      //{ scale: newScale, x: -positionX, y: positionY }
    }

    if (current > 600) {
      cloud1Api.pause();
      cloud2Api.pause();
      rotateApi.pause();
    } else if (current < 600) {
      cloud1Api.resume();
      cloud2Api.resume();
      rotateApi.resume();
    }

    // console.log(current);
  };

  return (
    <animated.div className="App" style={{ display: "flex", scrollSnapType: "y mandatory" }}>
      {/* character */}
      <Parallax pages={3} ref={containerRef} onScrollCapture={handleScroll} style={{ ...gradientBg }} id="parallax">
        {/* <ParallaxLayer sticky={{ start: 0.4, end: 1.5 }} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> */}

        <ParallaxLayer sticky={{ start: 0.4, end: 0.9 }} className={"layerIMG character ParrallaxLayer"} style={{ ...characterSize }}>
          <animated.img className={"imgC"} src="/img/girl.png" style={{ ...opacity, ...moveCharacter }} ref={characterRef} />
        </ParallaxLayer>

        <ParallaxLayer speed={1} offset={0} factor={1.5} style={{ ...opacity }} className={"ParallaxLayer"}>
          <animated.h2>My Portafolio</animated.h2>
        </ParallaxLayer>

        {/* Background */}

        <ParallaxLayer offset={0} factor={1} speed={0.5} className={"layerIMG ParallaxLayer"}>
          <animated.img className={"backg"} src="/img/bg/rightcloud.png" style={{ transform: "scaleX(-1)", ...opacity, ...cloud1 }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} className={"layerIMG ParallaxLayer"}>
          <animated.img className={"backg"} src="/img/bg/rightcloud.png" style={{ ...opacity, ...cloud1 }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} factor={1} speed={1} className={"layerIMG ParallaxLayer"}>
          <animated.img className={"backg"} src="/img/bg/galaxy.png" style={{ ...opacity, ...rotate }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} className={"layerIMG ParallaxLayer"}>
          <animated.img className={"backg"} src="/img/bg/leftCloud.png" style={{ ...opacity, ...cloud2 }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} className={"layerIMG ParallaxLayer"}>
          <animated.img className={"backg"} src="/img/bg/leftCloud.png" style={{ transform: "scaleY(-1)", ...opacity, ...cloud2 }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} className={"layerIMG ParallaxLayer"}>
          <animated.img className={"backg"} src="/img/bg/leftCloud.png" style={{ transform: "scale(-1,-1)", ...opacity, ...cloud2 }} />
        </ParallaxLayer>

        {/* background Final */}

        <ParallaxLayer speed={0.5} offset={1} factor={2} style={{}} className={"ParallaxLayer"}>
          <animated.h2>About me</animated.h2>
        </ParallaxLayer>

        {/* Inventory Technology*/}

        <ParallaxLayer speed={0.5} offset={1.3} factor={2} style={{ display: "flex", justifyContent: "center" }} className={"ParallaxLayer"}>
          <Tech />
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={2} factor={3} style={{ backgroundImage: "url(/img/moon.jpg)", backgroundSize: "cover" }} className={"ParallaxLayer"}>
          <h2>Proyects</h2>
        </ParallaxLayer>
      </Parallax>
    </animated.div>
  );
}

export default App;
