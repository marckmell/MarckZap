// src/components/ChatLayout/ConversationListPanel.tsx
import React from 'react';

const ConversationListPanel: React.FC = () => {
  return (
    <aside className="conv-panel" aria-label="Lista de conversas">
      <div className="panel-header">
        <div className="panel-title">
          <span>Conversas</span>
        </div>
      </div>
      <div className="conv-list" role="list">
        <div className="conv-item active" role="listitem" tabIndex={0}>
          <div className="conv-avatar" style={{background:'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>CF</div>
          <div className="conv-body">
            <div className="conv-name">Carlos Ferreira</div>
            <div className="conv-preview">Quero saber mais sobre o plano anual...</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ConversationListPanel;
