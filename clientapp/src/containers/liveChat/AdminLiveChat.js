import React, { useState, useEffect } from "react";
import socket from "../../utils/socket";
import ChatWindow from "./ChatWindow";
import notificationSound from "../../assets/notify.wav";
import axios from "axios";
import "./AdminLiveChat.css";
import { useRef } from "react";

const AdminLiveChat = () => {
  const [requests, setRequests] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const [canPlayAudio, setCanPlayAudio] = useState(false);

  const [unreadMessages, setUnreadMessages] = useState({});

  const audioRef = useRef(null);
  const originalTitle = useRef(document.title);
  const blinkInterval = useRef(null);

  useEffect(() => {
    const isPreviouslyUnlocked =
      localStorage.getItem("audioUnlocked") === "true";

    if (isPreviouslyUnlocked) {
      setCanPlayAudio(true);
      return;
    }
    const unlockAudio = () => {
      const dummy = new Audio();
      dummy.muted = true;
      dummy
        .play()
        .then(() => {
          console.log("🔓 Audio auto-unlocked");
          localStorage.setItem("audioUnlocked", "true");
          setCanPlayAudio(true);
        })
        .catch(() => {
          console.log(
            "🔒 Audio auto-unlock failed — waiting for user interaction"
          );
        });
    };

    unlockAudio();

    const enableAudio = () => {
      localStorage.setItem("audioUnlocked", "true");
      setCanPlayAudio(true);
    };

    window.addEventListener("click", enableAudio, { once: true });
    window.addEventListener("keydown", enableAudio, { once: true });

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    return () => {
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("keydown", enableAudio);
    };
  }, []);

  useEffect(() => {
    if (canPlayAudio && !audioRef.current) {
      const audio = new Audio(notificationSound);
      audio.preload = "auto";
      audioRef.current = audio;
    }
  }, [canPlayAudio]);

  const notifyAdmin = () => {
    if (Notification.permission === "granted") {
      new Notification("🆕 New Live Chat", {
        body: "A guest is waiting to chat",
        icon: "/favicon.ico",
      });
    }

    if (canPlayAudio && audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => {
          console.warn("🔇 Audio play failed:", err);
        });
      } catch (err) {
        console.warn("🔇 Audio error:", err);
      }
    }

    // If tab is not visible, start blinking title
    if (document.visibilityState !== "visible") {
      let toggle = false;
      clearInterval(blinkInterval.current);
      blinkInterval.current = setInterval(() => {
        document.title = toggle
          ? "🔔 New Chat Request!"
          : originalTitle.current;
        toggle = !toggle;
      }, 1000);
    }
  };

  // Stop title blinking when user returns to tab
  useEffect(() => {
    const stopBlink = () => {
      clearInterval(blinkInterval.current);
      document.title = originalTitle.current;
    };
    document.addEventListener("visibilitychange", stopBlink);
    return () => document.removeEventListener("visibilitychange", stopBlink);
  }, []);

  ///////////////////////////////////
  // ===========================================
  useEffect(() => {
    const handleReceiveMessage = (msg) => {
      const { sessionId } = msg;
      console.log("📨 Message received in AdminLiveChat", msg);
      if (sessionId !== activeChat) {
        setUnreadMessages((prev) => ({
          ...prev,
          [sessionId]: true,
        }));
      }
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [activeChat]);

  // ///////////////////////////////////////////

  useEffect(() => {
    socket.on("newChatRequest", ({ sessionId, email }) => {
      console.log("📥 Admin received chat request:", sessionId);
      setRequests((reqs) => [{ sessionId, email }, ...reqs]);
      notifyAdmin();
    });
    return () => socket.off("newChatRequest");
  }, [canPlayAudio]);

  const openChat = (sessionId) => {
    setActiveChat(sessionId);

    socket.emit("adminJoin", { sessionId });
    setUnreadMessages((prev) => {
      const updated = { ...prev };
      delete updated[sessionId];
      return updated;
    });
  };

  useEffect(() => {
    axios.get("https://api.smartlearner.com/api/chat-all/chats").then((res) => {
      const sortedChats = res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setRequests(sortedChats);
    });
  }, []);

  const handleBack = () => {
    setActiveChat(null);
  };

  useEffect(() => {
    socket.on("chatEndedAdmin", ({ sessionId }) => {
      setRequests((prev) =>
        prev.filter((chat) => chat.sessionId !== sessionId)
      );
      if (activeChat === sessionId) setActiveChat(null);
    });

    return () => socket.off("chatEndedAdmin");
  }, [activeChat]);

  const endChat = async (sessionId) => {
    try {
      await axios.post("https://api.smartlearner.com/api/chat-all/end", {
        sessionId,
      });
      socket.emit("endChat", { sessionId });
    } catch (err) {
      console.error("Failed to end chat", err);
    }
  };

  return (
    <div className="adminLiveChat-dashboard">
      <aside className="sidebar-LiveChat">
        <h2>Live Requests</h2>
        <div className="chat-list-Sidebar">
          {requests.length === 0 && <p>No requests</p>}
          <ul>
            {requests.map(({ sessionId, email }) => (
              <li
                key={sessionId}
                className={
                  sessionId === activeChat ? "active-chat" : "Live-chat-btn"
                }>
                <p
                  onClick={() => openChat(sessionId)}
                  style={{
                    margin: "0px",
                    padding: "0.8rem 0.8rem 0.8rem 0px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                  }}>
                  🟢 {email ? email : `Chat ${sessionId.slice(-4) || ""}`}
                  {unreadMessages[sessionId] && (
                    <span
                      style={{
                        fontSize: "14px",
                        position: "absolute",
                        bottom: "2rem",
                        right: "1px",
                      }}>
                      🔔
                    </span>
                  )}
                  <span
                    onClick={() => endChat(sessionId)}
                    style={{ cursor: "pointer" }}>
                    ❌
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="chat-main">
        {activeChat ? (
          <ChatWindow sessionId={activeChat} onBack={handleBack} />
        ) : null}
      </main>
    </div>
  );
};

export default AdminLiveChat;
