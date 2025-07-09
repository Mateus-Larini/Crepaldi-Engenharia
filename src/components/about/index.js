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
        Engenheiro Mecânico formado em 2020, com sólida atuação na área de manutenção pesada. Iniciou sua trajetória como Assistente de PCM, alcançando a posição de Supervisor na Transpanorama Transportes S.A. Em 2024, assumiu a gerência de Planejamento e Manutenção na Construtora Lajeresk LTDA, onde lidera processos de gestão de ativos e manutenção de equipamentos em condições severas de operação na qual segue aprofundando seus conhecimentos em gestão de ativos, enfrentando desafios diários de manutenção pesada em equipamentos e veículos que operam em condições extremas.
        </p>
        <p>
        Em 2025, expandiu sua atuação para a elaboração de laudos técnicos e emissão de A.R.T.s, com foco em segurança operacional, confiabilidade de equipamentos e preservação da vida. Seu trabalho busca oferecer soluções técnicas que previnam falhas, reduzam riscos e garantam a integridade de operadores e estruturas.        </p>
        <p>
        Com responsabilidade técnica e compromisso com a excelência, Gabriel alia experiência prática à visão estratégica para entregar resultados com confiança e segurança.        </p>
      </div>
      <div className="image-container">
        <img src={logo} alt="Gabriel perfil" />
      </div>
    </section>
  );
};

export default AboutSection;
