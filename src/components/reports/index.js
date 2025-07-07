import React from "react";
import "./style.css";

const laudos = [
  {
    id: 1,
    title: "Laudo de Guindaste",
    icon: "🏗️",
    short: "Avaliação estrutural e funcional do guindaste.",
    detail:
      "Verifica estrutura, estabilidade e sistema hidráulico conforme NR-12 e normas técnicas para garantir segurança e regularização junto aos órgãos competentes.",
  },
  {
    id: 2,
    title: "Laudo de Guindauto (Munck)",
    icon: "🚛",
    short: "Inspeção completa do equipamento tipo Munck.",
    detail:
      "Analisa dispositivos de içamento, comandos hidráulicos, estrutura e estabilizadores conforme NR-11 e NR-12. Necessário para operação legal e segura.",
  },
  {
    id: 3,
    title: "Laudo de Máquinas Pesadas",
    icon: "🛠️",
    short: "Análise técnica de tratores, escavadeiras, entre outros.",
    detail:
      "Inspeção detalhada de sistemas mecânicos, hidráulicos e elétricos em máquinas pesadas com base nas normas de segurança operacional e fabricante.",
  },
  {
    id: 4,
    title: "Laudo de Empilhadeiras",
    icon: "🚜",
    short: "Avaliação técnica de empilhadeiras industriais.",
    detail:
      "Verifica freios, direção, cilindros, dispositivos de elevação e atende requisitos da NR-11 para ambientes logísticos e industriais.",
  },
  {
    id: 5,
    title: "Laudo de Máquinas NR12",
    icon: "📏",
    short: "Adequação de máquinas conforme a NR-12.",
    detail:
      "Relatório técnico para análise de riscos, proteções, sensores e documentação exigida para conformidade com a NR-12.",
  },
  {
    id: 6,
    title: "Laudo de Sistemas Transportadores (NR11)",
    icon: "🔄",
    short: "Verificação de esteiras, roletes e transportadores.",
    detail:
      "Laudo exigido para operação de sistemas de transporte contínuo, garantindo segurança, sensores e contenções adequadas conforme NR-11.",
  },
  {
    id: 7,
    title: "Laudo de Ar Condicionado e PMOC",
    icon: "❄️",
    short: "Plano de Manutenção, Operação e Controle (PMOC).",
    detail:
      "Documento obrigatório pela Anvisa que assegura a qualidade do ar em ambientes climatizados. Verifica filtros, dutos e registros de manutenção.",
  },
  {
    id: 8,
    title: "Laudo de Brinquedos e Playgrounds",
    icon: "🎠",
    short: "Inspeção técnica de brinquedos e estruturas infantis.",
    detail:
      "Verifica riscos de aprisionamento, integridade estrutural e materiais conforme normas da ABNT e segurança infantil.",
  },
  {
    id: 9,
    title: "Laudo de Sistemas de Exaustão (Cozinhas)",
    icon: "🍳",
    short: "Avaliação de coifas, dutos e exaustores industriais.",
    detail:
      "Garante eficiência do sistema de exaustão e conformidade com normas de higiene, incêndio e qualidade do ar em cozinhas industriais.",
  },
  {
    id: 10,
    title: "Laudo de Elevadores e Plataformas",
    icon: "🛗",
    short: "Laudo técnico de elevadores e acessibilidade.",
    detail:
      "Verifica mecanismos, comandos, botoeiras, proteção contra quedas e acessibilidade conforme normas NBR e NR-12.",
  },
  {
    id: 11,
    title: "Laudo de Andaimes",
    icon: "🧱",
    short: "Segurança estrutural de andaimes e plataformas de trabalho.",
    detail:
      "Inspeção em conformidade com NR-18, avaliando travamentos, amarrações, estabilidade e uso correto de acessórios.",
  },
  {
    id: 12,
    title: "Laudo de Reclassificação de Monta",
    icon: "📄",
    short: "Mudança da classificação técnica de máquinas.",
    detail:
      "Documento que redefine o enquadramento da máquina/equipamento, com base em modificações ou novas aplicações. Exigido para atualizar registro técnico.",
  },
  {
    id: 13,
    title: "Laudo de Perícias e Assistência Técnica",
    icon: "⚖️",
    short: "Atuação técnica em processos judiciais e extrajudiciais.",
    detail:
      "Análise técnica imparcial e fundamentada, voltada para perícias trabalhistas, civis e laudos como assistente técnico em litígios.",
  },
  {
    id: 14,
    title: "Laudo de Exaustão Industrial",
    icon: "🌫️",
    short: "Verificação de sistemas de exaustão em ambientes fabris.",
    detail:
      "Analisa funcionamento, vazão, emissão de poluentes e controle de fumaça em sistemas industriais, atendendo normas ambientais e trabalhistas.",
  },
];

const responsabilidades = [
  {
    icon: "🛇",
    title: "Engenheiro responsável técnico por desmanches",
  },
  {
    icon: "🏢",
    title: "Engenheiro responsável técnico por empresas",
  },
  
];

const outrosServicos = [
  {
    icon: "🔧",
    title: "Manutenção preventiva de máquinas e equipamentos em geral",
  }
]
const LaudosSection = () => {
  return (
    <section id="servicos" className="laudos-section">
      <div className="laudos-header">
        <div className="laudos-icon">📁</div>
        <h2>Laudos Técnicos Especializados</h2>
        <div className="underline" />
        <p className="intro">
          Esta é a seção dedicada aos <strong>laudos técnicos emitidos com responsabilidade profissional</strong>, conforme exigências da legislação e normas técnicas vigentes.<br />
          Abaixo você encontra nossos serviços de inspeção e certificação técnica.
        </p>
      </div>

      <div className="cards-grid">
        {laudos.map(({ id, icon, title, short, detail }) => (
          <div key={id} className="laudo-card" tabIndex={0} aria-label={`Laudo: ${title}`}>
            <div className="card-inner">
              <div className="card-front">
                <div className="icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{short}</p>
              </div>
              <div className="card-back">
                <p>{detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="responsabilidades-section">
        <h2>Responsabilidades Técnicas</h2>
        <div className="underline" />
        <div className="responsabilidades-grid">
          {responsabilidades.map(({ icon, title }, index) => (
            <div key={index} className="resp-card">
              <div className="resp-icon">{icon}</div>
              <div className="resp-title">{title}</div>
            </div>
            
          ))}
          
        </div>
      </div>

      <div className="responsabilidades-section">
        <h2>Outros Serviços</h2>
        <div className="underline" />
        <div className="responsabilidades-grid">
          {outrosServicos.map(({ icon, title }, index) => (
            <div key={index} className="resp-card">
              <div className="resp-icon">{icon}</div>
              <div className="resp-title">{title}</div>
            </div>
          ))}
          
        </div>
      </div>

    </section>
  );
};

export default LaudosSection;