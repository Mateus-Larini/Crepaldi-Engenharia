import React, { useRef, useState, useEffect, useMemo } from "react";
import video1 from "../../assets/videos/buscando-chave.mp4";
import video2 from "../../assets/videos/arrumando-peca.mp4";
import logo from '../../assets/images/logo-crepaldi-engenharia.png';

import "./style.css";

const HeaderPage = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const videos = useMemo(() => [video1, video2], []);
  const refs = useMemo(() => [videoRef1, videoRef2], []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentVideo = refs[activeIndex].current;

    const handleEnded = () => {
      const nextIndex = (activeIndex + 1) % videos.length;
      const current = refs[activeIndex].current;
      const next = refs[nextIndex].current;

      next.style.opacity = 0;
      next.currentTime = 0;
      next.play();

      setTimeout(() => {
        next.style.transition = "opacity 1.5s ease-in-out";
        next.style.opacity = 1;
        current.style.transition = "opacity 1.5s ease-in-out";
        current.style.opacity = 0;
      }, 100);

      setTimeout(() => {
        setActiveIndex(nextIndex);
      }, 1600);
    };

    if (currentVideo) {
      currentVideo.addEventListener("ended", handleEnded);
      currentVideo.play();
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("ended", handleEnded);
      }
    };
  }, [activeIndex, refs, videos.length]);

  // JSX
  return (
    <header className="header-container">
      {videos.map((src, index) => (
        <video
          key={index}
          ref={refs[index]}
          src={src}
          muted
          autoPlay={false}
          className="header-video"
          style={{
            opacity: index === activeIndex ? 1 : 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: index === activeIndex ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        />
      ))};

      {/* Logo Crepaldi  */}
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="Logo Crepaldi Engenharia"></img>
        </div>
      </div>
      
      {/* Menu de navegação */}
      <nav className="nav">
        <a href="#inicio">Página Inicial</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Nossos Serviços</a>
        <a href="#contato">Contato</a>
      </nav>

      {/* Texto principal */}
      <div div="inicio" className="header-content">
        <h1>
          Conheça nossas opções de serviços de laudos técnicos,
          responsabilidades técnicas e ART de Engenharia Mecânica para sua
          empresa
        </h1>
        <h2>Conformidade e segurança sem complicação</h2>
      </div>
      
      {/* Botão para direcionamento Whatsapp */}
      <div className="button-direct-wpp">
        <a
          href="https://wa.me/5544991040020?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
          targe="_blank"
        >
          <button className="button-wpp">Solicite seu orçamento agora!</button>
        </a>
      </div>
    </header>
  );
};

export default HeaderPage;
