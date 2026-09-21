import React, { createContext, useContext, useState } from 'react';

const ChatbotContext = createContext({
  isOpen: false,
  toggleChatbot: () => {},
  openChatbot: () => {},
  closeChatbot: () => {},
  isAvailable: false,
});

export const ChatbotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Disabled by default on public site per specifications until AI backend integration
  const [isAvailable] = useState(false);

  const toggleChatbot = () => setIsOpen((prev) => !prev);
  const openChatbot = () => setIsOpen(true);
  const closeChatbot = () => setIsOpen(false);

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        toggleChatbot,
        openChatbot,
        closeChatbot,
        isAvailable,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => useContext(ChatbotContext);
