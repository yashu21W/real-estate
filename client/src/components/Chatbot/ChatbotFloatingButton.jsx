import { useState } from 'react';
import ChatbotModal from './ChatBotModal';
import './ChatbotFloatingButton.css';

const ChatbotFloatingButton = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prevState) => !prevState);
  };

  return (
    <>
      {isChatbotOpen && <ChatbotModal onClose={toggleChatbot} />}
      <button className="floating-button" onClick={toggleChatbot}>
        🏠
      </button>
    </>
  );
};

export default ChatbotFloatingButton;
