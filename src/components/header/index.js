import React, { useEffect, useState, useRef, useMemo } from "react";
import video1 from "../../assets/videos/buscando-chave.mp4";
import video2 from "../../assets/videos/arrumando-peca.mp4";
import logo from "../../assets/images/logo-clara.png";
import { FaWhatsapp } from "react-icons/fa";
import "./style.css";

const HeaderPage = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const videos = useMemo(() => [video1, video2], []);
  const refs = useMemo(() => [videoRef1, videoRef2], []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightNav, setLightNav] = useState("dark"); // inicializa em "dark" para header

  // Alterna os vídeos automaticamente
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

  // Observer para trocar a classe do nav com base no scroll (mobile)
  useEffect(() => {
    const header = document.getElementById("inicio");

    const handleScroll = () => {
      const headerBottom = header.getBoundingClientRect().bottom;

      if (window.innerWidth <= 768) {
        if (headerBottom <= 0) {
          // Saiu da primeira dobra no mobile: nav clara
          setLightNav("light");
        } else {
          // Está no topo no mobile: nav escura (fundo preto translúcido)
          setLightNav("dark");
        }
      } else {
        // Desktop: nav clara se saiu do topo, transparente se no topo
        setLightNav(headerBottom <= 0 ? "light" : false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // executa ao montar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-container" id="inicio">
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
            zIndex: 1,
            transition: "opacity 1.5s ease-in-out",
          }}
        />
      ))}

      <div className="video-overlay"></div>

      <div
        className={`header-bar ${
          lightNav === "light"
            ? "nav-light"
            : lightNav === "dark"
            ? "nav-dark-bg"
            : ""
        }`}
      >
        <div className="logo-container">
          <img src={logo} alt="Logo Crepaldi Engenharia" />
        </div>
        <nav className="nav-container">
          <a href="#inicio">Página Inicial</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>

      <div className="header-content fade-in">
        <h1>
          Conheça nossas opções de <strong>laudos técnicos</strong>,{" "}
          <strong>responsabilidades técnicas</strong> e{" "}
          <strong>ART de Engenharia Mecânica</strong> para sua empresa
        </h1>
        <h2>Conformidade e segurança sem complicação</h2>
      </div>

      <div className="button-direct-wpp fade-in">
        <a
          href="https://wa.me/5544991040020?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-wpp">
            <FaWhatsapp style={{ marginRight: 8 }} />
            Solicite seu orçamento agora!
          </button>
        </a>
      </div>
    </header>
  );
};

export default HeaderPage;
