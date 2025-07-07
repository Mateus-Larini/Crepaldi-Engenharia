import React from "react";
import { FaCode } from "react-icons/fa";
import "./style.css";

const ContactSection = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Fale Conosco</h2>
            <p>Entre em contato para orçamentos, dúvidas técnicas ou parcerias.</p>
            <p><strong>Email:</strong> contato@crepaldiengenharia.com.br</p>
            <p><strong>Telefone:</strong> (44) 99104-0020</p>
            <p><strong>Endereço:</strong> Marialva - PR</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Crepaldi Engenharia. Todos os direitos reservados.</p>
        <div className="dev-credit">
          <FaCode className="dev-icon" />
          <span>Desenvolving by <strong>Mateus Larini</strong></span>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
