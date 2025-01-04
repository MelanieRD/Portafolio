import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useScroll, useSpring } from "@react-spring/web";

function App() {
  const [opacity, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  }));

  const [moveCharacter, moveApi] = useSpring(() => ({
    from: { y: 0 },
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

  const [changeSize, sizeApi] = useSpring(() => ({
    from: { scale: 1, x: 0, y: 0 },
    to: { scale: 1.01, x: 0, y: 0 },
    config: { duration: 1000 },
  }));

  const containerRef = useRef(null);

  const handleScroll = () => {
    const current = containerRef.current.current || 0; // Posición actual del scroll
    const newScale = 1 - current / 1000;
    const positionX = current * 2;
    const positionY = current * 2.5;

    if (newScale > 0.7) {
      sizeApi.start({ scale: newScale, x: -positionX, y: positionY });
    }

    if (current > 600) {
      cloud1Api.stop();
      cloud2Api.stop();
      rotateApi.stop();
    } else {
      cloud1Api.start({ y: 10, scale: 1.1 });
      cloud2Api.start({ y: 10, scale: 1.1 });
      rotateApi.start({ rotate: 10, scale: 1.08, y: 30 });
    }

    console.log(current);
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      {/* character */}
      <Parallax pages={2} ref={containerRef} onScrollCapture={handleScroll}>
        <ParallaxLayer sticky={{ start: 0.4, end: 1 }} style={{ display: "flex", justifyContent: "center", alignItems: "center", ...opacity, ...changeSize, ...moveCharacter }}>
          <animated.img className={"imgC"} src="/img/girl.png" />
        </ParallaxLayer>

        <ParallaxLayer speed={1} offset={0} factor={1.5} style={{ backgroundColor: "#1c2754", backgroundSize: "cover", ...opacity }}>
          <h2>My Portafolio</h2>
        </ParallaxLayer>

        {/* Background */}

        <ParallaxLayer offset={0} factor={1} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center", ...opacity, ...cloud1 }}>
          <animated.img className={"backg"} src="/img/bg/rightcloud.png" style={{ transform: "scaleX(-1)" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center", ...opacity, ...cloud1 }}>
          <animated.img className={"backg"} src="/img/bg/rightcloud.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.18} factor={1} speed={1} style={{ display: "flex", justifyContent: "center", alignItems: "center", ...opacity, ...rotate }}>
          <animated.img className={"backg"} src="/img/bg/galaxy.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center", ...opacity, ...cloud2 }}>
          <animated.img className={"backg"} src="/img/bg/leftCloud.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center", ...opacity, ...cloud2 }}>
          <animated.img className={"backg"} src="/img/bg/leftCloud.png" style={{ transform: "scaleY(-1)" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center", ...opacity, ...cloud2 }}>
          <animated.img className={"backg"} src="/img/bg/leftCloud.png" style={{ transform: "scale(-1,-1)" }} />
        </ParallaxLayer>

        {/* background Final */}

        <ParallaxLayer speed={0.5} offset={1} factor={2} style={{ backgroundImage: "url(/img/galaxy.jpg)", backgroundSize: "cover" }}>
          <h2>About me</h2>
        </ParallaxLayer>

        {/* Inventory Technology*/}

        <ParallaxLayer speed={0.5} offset={1} factor={2}>
          <animated.div style={{ width: "300px", height: "400px", backgroundColor: "red" }}></animated.div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={2} factor={2} style={{ backgroundImage: "url(/img/moon.jpg)", backgroundSize: "cover" }}>
          <h2>What's up</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
