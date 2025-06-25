import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/foto-perfil-gabriel.jpeg";
import { FaCog } from "react-icons/fa"; // ícone de engrenagem
import "./style.css";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current; // copia a referência para variável local
  
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
  
    if (currentRef) observer.observe(currentRef);
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="sobre" className={`about-section ${visible ? "visible" : ""}`} ref={sectionRef}>
      <div className="text-content">
        <h2>
          Sobre <span className="highlight">Gabriel</span> Crepaldi <FaCog className="icon-cog" />
        </h2>
        <p>
          Com expertise em laudos técnicos e ARTs, oferecemos soluções robustas e inovadoras para sua empresa. Nossa prioridade é garantir segurança, qualidade e conformidade nos projetos de engenharia mecânica.
        </p>
        <p>
          Nossa equipe está sempre atualizada com as melhores práticas do mercado, focada em transformar desafios em oportunidades.
        </p>
      </div>
      <div className="image-container">
        <img src={logo} alt="Gabriel perfil" />
      </div>
    </section>
  );
};

export default AboutSection;
