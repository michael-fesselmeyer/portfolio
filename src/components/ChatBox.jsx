import React, { useState, useRef, useEffect } from "react";
import "./ChatBox.css";

const ChatBox = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const chatInputRef = useRef(null);

  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const OPENAI_API_ENDPOINT =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";

  const addChatMessage = (sender, message) => {
    setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const sendChatMessage = (message) => {
    setLoading(true);

    fetch(OPENAI_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `You are Michael Fesselmeyer, a Software Engineer who recently graduated from General Assembly Bootcamp. I specialize in React.js, Node.js, Express.js, Django (Python), and Git version control. The user will ask you questions related to your experience and skills, and you will help them understand more about you and your expertise: ${message}\nA: `,
        max_tokens: 200,
        temperature: 0.6,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data && data.choices && data.choices.length > 0) {
          const chatbotResponse = data.choices[0].text.trim();
          addChatMessage("Michael Fesselmeyer", chatbotResponse);
        } else {
          throw new Error("Invalid response from OpenAI API");
        }
      })
      .catch((error) => {
        console.error(error);
        addChatMessage(
          "Chat IA",
          "Sorry, I was unable to process your request."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUserInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const userInput = chatInputRef.current.value.trim();
      if (userInput) {
        addChatMessage("You", userInput);
        sendChatMessage(userInput);
        chatInputRef.current.value = "";
      }
    }
  };

  const handleSendButtonClick = () => {
    const userInput = chatInputRef.current.value.trim();
    if (userInput) {
      addChatMessage("You", userInput);
      sendChatMessage(userInput);
      chatInputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, []);

  return (
    <div className="chat-widget">
      <div className="chat-container">
        <div className="chat-messages">
          {chatMessages.map((message, index) => (
            <div className="chat-message-container" key={index}>
              <div className="chat-message-header">{message.sender}:</div>
              <div className="chat-message-body">{message.message}</div>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            id="chat-input"
            ref={chatInputRef}
            type="text"
            onKeyDown={handleUserInput}
          />
          <button id="chat-send" onClick={handleSendButtonClick}>
            Send
          </button>
        </div>
      </div>
      {isLoading && <div id="loading">Loading...</div>}
    </div>
  );
};

export default ChatBox;
