import React from "react";
import { FaCode, FaLinkedin } from "react-icons/fa";

import "./style.css";

const ContactSection = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Fale Conosco</h2>
            <p>Entre em contato para orçamentos, dúvidas técnicas ou parcerias.</p>
            <p><strong>Email:</strong> eng.gabrielcrepaldi@gmail.com</p>
            <p><strong>Telefone:</strong> (44) 99104-0020</p>
            <p><strong>Endereço:</strong> Marialva - PR</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Crepaldi Engenharia. Todos os direitos reservados.</p>
        <div className="dev-credit">
          <FaCode className="dev-icon" />
          <span>Desenvolving by <strong>Mateus Larini </strong></span>
          <a href="https://www.linkedin.com/in/mateus-larini-366602241/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077B5" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
