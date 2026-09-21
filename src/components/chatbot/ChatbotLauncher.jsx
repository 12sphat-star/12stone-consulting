import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useChatbot } from './ChatbotProvider';
import '../../styles/Chatbot.css';

export const ChatbotLauncher = () => {
  const { isAvailable, toggleChatbot } = useChatbot();

  // Return null on public site until AI backend is enabled
  if (!isAvailable) {
    return null;
  }

  return (
    <div className="chatbot-mount-point">
      <button
        className="chatbot-launcher-btn"
        onClick={toggleChatbot}
        aria-label="Open 12 Stone AI Assistant"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};
