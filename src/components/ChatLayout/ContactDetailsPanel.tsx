// src/components/ChatLayout/ContactDetailsPanel.tsx
import React from 'react';

const ContactDetailsPanel: React.FC = () => {
  return (
    <aside className="contact-panel" aria-label="Informações do contato">
      <div className="contact-top">
        <div className="contact-avatar-lg" style={{background:'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>CF</div>
        <div className="contact-name-lg">Carlos Ferreira</div>
        <div className="contact-phone">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +55 11 98765-4321
        </div>
      </div>

      <div className="contact-section">
        <div className="section-title">Dados do contato</div>
        <div className="info-row"><span className="info-label">E-mail</span><span className="info-value">carlos@email.com</span></div>
        <div className="info-row"><span className="info-label">Empresa</span><span className="info-value">Tech Solutions</span></div>
      </div>

      <div className="contact-section">
        <div className="section-title">Tags</div>
        <div className="tag-wrap">
          <span className="tag tag-blue">Lead Quente</span>
          <span className="tag tag-green">Interessado</span>
        </div>
      </div>
    </aside>
  );
};

export default ContactDetailsPanel;
