import React from 'react';
import { useChatbot } from './ChatbotProvider';
import { X } from 'lucide-react';
import '../../styles/Chatbot.css';

export const ChatbotWindow = () => {
  const { isOpen, isAvailable, closeChatbot } = useChatbot();

  if (!isAvailable || !isOpen) {
    return null;
  }

  return (
    <div className="chatbot-window-container">
      <div className="system-status-header" style={{ padding: '1rem', margin: 0 }}>
        <div>
          <span className="leak-box-title">12 Stone AI Assistant</span>
          <div className="system-tag">System Ready</div>
        </div>
        <button onClick={closeChatbot} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
          <X size={20} />
        </button>
      </div>
      <div style={{ flex: 1, padding: '1rem', color: 'var(--text-muted)' }}>
        Mount point container for 12 Stone AI engine.
      </div>
    </div>
  );
};
