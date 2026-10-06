import React, { useState, useEffect, useRef } from "react";
import socket from "../../utils/socket";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import userImg from "../../assets/images/userImg.jpeg";
import botImg from "../../assets/images/botImg.jpeg";
import popupSound from "../../assets/longpopup.wav";

const ChatWindow = ({ sessionId, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  const [input, setInput] = useState("");
  const endRef = useRef();

  const playSound = () => {
    const audio = new Audio(popupSound);
    audio.play().catch((e) => console.error("Sound playback failed:", e));
  };

  useEffect(() => {
    axios
      .get(`https://api.smartlearner.com/api/chat-all/${sessionId}`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setMessages(data);
        const email = data.find((m) => m.email)?.email;
        setUserEmail(email);
      });
    socket.emit("adminJoin", { sessionId });

    const messageHandler = (msg) => {
      if (msg.sender === "user") {
        playSound();
      }

      if (msg.sessionId === sessionId) {
        setMessages((msgs) => [...msgs, msg]);
        if (msg.email && !userEmail) {
          setUserEmail(msg.email);
        }
      }
    };

    socket.on("receiveMessage", messageHandler);

    return () => socket.off("receiveMessage", messageHandler);
  }, [sessionId, userEmail]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const createdAt = new Date().toISOString();
    const msg = { sessionId, sender: "admin", content: input, createdAt };
    socket.emit("sendMessage", msg);

    setInput("");
  };

  useEffect(() => {
    const handleChatEnded = ({ sessionId: endedSession, message }) => {
      console.log("📨 Message received in AdminLiveChat", message);
      if (endedSession === sessionId) {
        setMessages((prev) => [
          ...prev,
          { sender: "system", content: message },
        ]);
      }
    };

    socket.on("chatEndedAdmin", handleChatEnded);
    return () => socket.off("chatEndedAdmin", handleChatEnded);
  }, [sessionId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chatbot-container">
        <div className="chat-heading">
          <div className="chat-header">
            <button
              onClick={onBack}
              style={{
                marginRight: "10px",
                backgroundColor: "rgb(255, 0, 115)",
                color: "white",
                border: "none",
                padding: "0.5rem 0.8rem",
                borderRadius: "6px",
              }}>
              ← Back
            </button>
            <h3
              style={{
                marginBottom: "0px",
                color: "white",
                fontSize: "1.2rem",
              }}>
              {userEmail
                ? `Chat with: ${userEmail}`
                : `Chat ID: ${sessionId.slice(-8)}`}
            </h3>
          </div>
        </div>
        <div className="chat-messages">
          {/* /////////////////////////////// */}
          {messages.map((m, i) => {
            const formattedTime = new Date(m.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            if (m.sender === "system") {
              return (
                <div key={i} className="chat-bubble system-msg">
                  <em>{m.content}</em>
                  <em className="message-time">{formattedTime}</em>
                </div>
              );
            }

            return (
              <div
                style={{ padding: "7px " }}
                key={i}
                className={`chat-bubble ${
                  m.sender === "admin" ? "admin-message" : "user-message"
                }`}>
                {m.sender === "admin" ? (
                  <div
                    style={{
                      display: "flex",

                      flexDirection: "column",
                    }}>
                    {" "}
                    <section>{m.content}</section>
                    <em
                      style={{
                        textAlign: "right",
                        fontSize: "0.7rem",
                      }}>
                      {formattedTime}
                    </em>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",

                      flexDirection: "column",
                    }}>
                    {" "}
                    <p style={{ marginBottom: "0px" }}>{m.content}</p>
                    <em
                      style={{
                        textAlign: "right",
                        fontSize: "0.7rem",
                      }}>
                      {formattedTime}
                    </em>
                  </div>
                )}
              </div>
            );
          })}
          {/* ///////////////////////// */}
          <div ref={endRef} />
        </div>
        <div className="chat-input-area">
          <input
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <IoSend onClick={sendMessage} className="chatBtn" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
