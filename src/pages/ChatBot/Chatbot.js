import React, { useState } from "react";
import "./Chatbot.css";
import clogo from "../../Assets/thumbnail_Kids_Tryz_FINALLOGO_BGLESS-01 3.svg";
import sendlogo from "../../Assets/Group 3074.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { IoChevronBackOutline } from "react-icons/io5";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    return `${formattedHours}:${minutes} ${amOrPm}`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const currentTime = getCurrentTime();
      const newChatMessage = {
        text: newMessage,
        sender: "user",
        time: currentTime,
      };
      setMessages([...messages, newChatMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat_main">
      <div className="chatbot-container">
        <div className="header">
          <div className="round">
            <Link to='/'> <img src={clogo} alt="Logo" className="logo" /></Link>
          </div>
          <h2>KidzTryz Support Bot</h2>
          <div>
          <Link to='/help'> <Button variant="contained" sx={{background:'#ff70a6',gap:'10px',color:'#f8f8f8',alignItems:'center', '&:hover': {
            background: '#ff70a6'
          }}}>
           <IoChevronBackOutline />
            Back
            </Button></Link> 
          </div>
        </div>
        <div className="chat-background">
          <div className="background-img">
            <div className="chat-area">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <span className="message-text">{message.text}</span>
                  <span className="message-time">{message.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <img src={sendlogo} onClick={handleSendMessage}></img>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
