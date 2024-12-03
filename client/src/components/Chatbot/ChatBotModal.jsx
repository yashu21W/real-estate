import { useState, useEffect, useRef } from 'react';
import './ChatbotModal.css';

// eslint-disable-next-line react/prop-types
const ChatbotModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Welcome to our real estate platform! How can we assist you today?' },
    { type: 'bot', text: 'Choose a question below or type your query.' },
  ]);

  const chatBodyRef = useRef(null);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  const handleUserAction = (input) => {
    setMessages((prev) => [...prev, { type: 'user', text: input }]);

    setTimeout(() => {
      let response = '';

      // Example responses for selected options
      switch (input) {
        case 'Buy property?':
          response = 'What is your preferred location and budget?';
          break;
        case 'Rent property?':
          response = 'What type of property and location are you looking to rent?';
          break;
        case 'Sell property?':
          response = 'Please provide details about the property you wish to sell.';
          break;
        case 'Loan details?':
          response = 'We can connect you to trusted loan providers. Do you have any specific requirements?';
          break;
        case 'Property taxes?':
          response = 'Property taxes depend on your location and property type. Please share more details.';
          break;
        case 'Location details?':
          response = 'Please specify the location you are interested in.';
          break;
        default:
          response = "Thank you for your input! We'll get back to you shortly.";
      }

      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
    }, 1000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const questions = [
    'Buy property?',
    'Rent property?',
    'Sell property?',
    'Loan details?',
    'Property taxes?',
    'Location details?',
  ];

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span>Real Estate Chatbot</span>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>

      <div className="chatbot-body" ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.type === 'bot' ? 'message bot-message' : 'message user-message'}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-options">
        {questions.map((question, index) => (
          <a key={index} onClick={() => handleUserAction(question)}>
            {question}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChatbotModal;
