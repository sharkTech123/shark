import React, { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import "./ChatLauncher.css";
import { FaCommentDots } from "react-icons/fa";
import poppupImg from "../../assets/images/IMG_2423.JPG";
import { useRef } from "react";

const ChatLauncher = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const chatWindowRef = useRef(null);
  const launcherRef = useRef(null);
  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      setShowPopup(true); // Show the popup once when the page loads
      sessionStorage.setItem("popupShown", "true"); // Set session storage to remember the popup has been shown
    }
  }, []);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpened &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        launcherRef.current &&
        !launcherRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpened]);

  const toggleChat = () => {
    if (!isOpened) {
      setShowPopup(false); // Hide popup when user opens the chat
    }
    setIsOpen(!isOpened);
  };

  return (
    <>
      {isOpened && (
        <div className="chat-window" ref={chatWindowRef}>
          <Chatbot />
        </div>
      )}

      <div className="chat-launcher" ref={launcherRef} onClick={toggleChat}>
        {isOpened ? (
          <span style={{ color: "white", textDecoration: "none" }}>✖</span>
        ) : (
          "💬"
        )}
      </div>
    </>
  );
};

export default ChatLauncher;
