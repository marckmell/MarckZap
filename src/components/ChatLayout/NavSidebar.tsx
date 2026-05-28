// src/components/ChatLayout/NavSidebar.tsx
import React from 'react';

const NavSidebar: React.FC = () => {
  return (
    <nav className="nav-sidebar" role="navigation" aria-label="Navegação principal">
      <div className="nav-logo" title="Painel">FZ</div>
      <button className="nav-btn active" title="Conversas" aria-label="Conversas">
        💬
      </button>
    </nav>
  );
};

export default NavSidebar;
