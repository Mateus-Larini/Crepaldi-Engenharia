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
        Meu nome é Gabriel, sou Engenheiro Mecânico formado no final de 2020. Desde então, tenho atuado com dedicação na área de manutenção automotiva pesada, onde tive a oportunidade, por bênção de Deus, de iniciar como Assistente de PCM e chegar ao cargo de Supervisor de PCM na Transpanorama Transportes S.A.        </p>
        <p>
        Em 2024, aceitei um novo desafio como Gerente de Planejamento e Manutenção na Construtora Lajeresk LTDA, onde sigo aprofundando meus conhecimentos em gestão de ativos, enfrentando desafios diários de manutenção pesada em equipamentos e veículos que operam em condições extremas.
        </p>
        <p>
        Diante de tudo que vivi até aqui, em 2025 decidi expandir minha atuação também para a área de laudos técnicos e A.R.T., com o objetivo de contribuir para processos mais seguros, equipamentos confiáveis e, acima de tudo, a proteção de vidas.
        </p>
        <p>
        Acredito que garantir a segurança de operadores, trabalhadores e usuários é um compromisso essencial da Engenharia Mecânica. Por isso, meu trabalho é oferecer não apenas laudos, mas soluções que assegurem o funcionamento adequado de máquinas e estruturas, prevenindo riscos e promovendo a tranquilidade de quem depende delas.
        </p>
        <p>
        Essa é a minha missão: unir experiência prática, responsabilidade técnica e cuidado com as pessoas para que cada equipamento cumpra seu papel — sem falhas, sem riscos, com máxima confiança.
        </p>
      </div>
      <div className="image-container">
        <img src={logo} alt="Gabriel perfil" />
      </div>
    </section>
  );
};

export default AboutSection;
