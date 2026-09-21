import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatbotProvider } from '../chatbot/ChatbotProvider';
import { ChatbotLauncher } from '../chatbot/ChatbotLauncher';
import { ChatbotWindow } from '../chatbot/ChatbotWindow';

export const Layout = ({ children }) => {
  return (
    <ChatbotProvider>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      {/* Mount point placeholders */}
      <ChatbotLauncher />
      <ChatbotWindow />
    </ChatbotProvider>
  );
};
