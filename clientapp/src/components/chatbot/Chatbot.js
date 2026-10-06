import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import socket from "../../utils/socket";
import "./Chatbot.css";
import { IoSend } from "react-icons/io5";
import userImg from "../../assets/images/userImg.jpeg";
import botImg from "../../assets/images/botImg.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getAddToCart } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import { IoMic, IoMicOff } from "react-icons/io5";

const isAppleDevice = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return /iPad|iPhone|iPod|Macintosh/.test(ua) && !window.MSStream;
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [joinedChat, setJoinedChat] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [liveChatInput, setLiveChatInput] = useState("");
  const [sendLiveMail, setSendLiveEmail] = useState("");
  const [emailSetSubmitted, setEmailSetSubmitted] = useState(false);
  const [emailSetSubmitted2, setEmailSetSubmitted2] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [passwordSubmitted, setPasswordSubmitted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const getValidSession = () => {
    const saved = localStorage.getItem("sessionData");
    if (saved) {
      const parsed = JSON.parse(saved);
      const now = Date.now();
      if (now < parsed.expiry) {
        return parsed.sessionId;
      } else {
        localStorage.removeItem("sessionData");
      }
    }
    return null;
  };

  const [sessionId, setSessionId] = useState(() => {
    const existing = getValidSession();
    if (existing) return existing;

    const newId = Date.now().toString();
    const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes
    localStorage.setItem(
      "sessionData",
      JSON.stringify({ sessionId: newId, expiry })
    );
    return newId;
  });

  useEffect(() => {
    const sessionData = localStorage.getItem("sessionData");
    if (!sessionData) return;

    const { expiry } = JSON.parse(sessionData);
    const now = Date.now();
    const timeout = expiry - now;

    if (timeout > 0) {
      const timer = setTimeout(() => {
        localStorage.removeItem("sessionData");
        localStorage.removeItem("userEmail");
        setSessionId(null); // Optional: force rerender or show expired UI
      }, timeout);
      return () => clearTimeout(timer);
    } else {
      localStorage.removeItem("sessionData");
      localStorage.removeItem("userEmail");
      setSessionId(null);
    }
  }, []);

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setSendLiveEmail(savedEmail);
    }
  }, []);

  const chatEndRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myCart } = useSelector((state) => state.cart);

  const handleAddToCart = (info, index) => {
    const productId = `${info.id}_${index}_${info.price}`;
    dispatch(
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
    );
  };

  useEffect(() => {
    if (sessionId) {
      socket.emit("joinRoom", { sessionId });
      console.log("✅ Emitted joinRoom for session:", sessionId);
    }
    socket.on("receiveMessage", (msg) => {
      if (msg.sessionId === sessionId) {
        setMessages((msgs) => [...msgs, msg]);
      }
    });
    socket.on("endChates", ({ sessionId: endedSession }) => {
      if (endedSession === sessionId) {
        setJoinedChat(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "admin",
            content: "✅ You have ended the chat.",
          },
        ]);
      }
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("chatEndedAdmin");
    };
  }, [sessionId]);

  // //////////////speak//////////////
  const cleanTextForSpeech = (htmlString) => {
    if (!htmlString) return "";

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    // 👉 Keep the inner text of <a> tags
    const links = tempDiv.querySelectorAll("a");
    links.forEach((link) => {
      // Replace <a> with its textContent
      const text = link.textContent || link.innerText || "";
      link.replaceWith(text);
    });

    let text = tempDiv.textContent || tempDiv.innerText || "";

    text = text
      .replace(/\n/g, " ") // Convert newlines to space
      .replace(/[*]/g, "") // Remove asterisks and bullets
      .replace(/🔗|🛍️|✅|👉|📞|🧑‍💻/g, "") // Remove emojis
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();

    return text;
  };

  const speakText = (text) => {
    const plainText = cleanTextForSpeech(text);

    if (window.responsiveVoice && plainText) {
      window.responsiveVoice.speak(plainText, "UK English Male", {
        pitch: 1,
        rate: 1,
        volume: 1,
      });
    }
  };

  const stopSpeaking = () => {
    if (window.responsiveVoice && window.responsiveVoice.isPlaying()) {
      window.responsiveVoice.cancel();
      console.log("🔇 responsiveVoice stopped");
    }
  };

  // /////////////////////////////////////////////

  const typeBotMessage = (text = "", delay = 30) => {
    return new Promise((resolve) => {
      if (typeof text !== "string") return resolve();
      let i = 0,
        cur = "",
        msgId = Date.now();

      speakText(text);

      setMessages((prev) => [
        ...prev,
        { id: msgId, sender: "admin", content: "", typing: true },
      ]);
      const iv = setInterval(() => {
        cur += text[i];
        setMessages((prev) =>
          prev.map((m) => (m.id === msgId ? { ...m, content: cur } : m))
        );
        i++;
        if (i === text.length) {
          clearInterval(iv);
          setMessages((prev) =>
            prev.map((m) => (m.id === msgId ? { ...m, typing: false } : m))
          );
          resolve();
        }
      }, delay);
    });
  };

  const addEmojis = (text = "") =>
    text
      .replace(/subscriptions/gi, "📦 subscription")
      .replace(/order/gi, "🛒 order")
      .replace(/help/gi, "🧑‍💻 help")
      .replace(/live chat/gi, "📞 live chat");

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  // /////////////////////////////////////////////

  // //////////////////////////////////////////////
  const handleBrowserSpeechRecognition = () => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("Speech recognition not supported in your browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-IN";
      recognitionRef.current.interimResults = true; // 👈 Enable live transcription
      recognitionRef.current.continuous = false; // Don't use continuous; we'll auto-stop
      recognitionRef.current.maxAlternatives = 1;

      let silenceTimeout;

      recognitionRef.current.onstart = () => {
        console.log("🎤 Voice recognition started.");
      };

      recognitionRef.current.onresult = (event) => {
        let transcript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }

        setInput(transcript.trim());

        // Reset silence timeout on every result
        clearTimeout(silenceTimeout);
        silenceTimeout = setTimeout(() => {
          recognitionRef.current?.stop();
          setIsListening(false);
          console.log("⏹️ Auto-stopped due to 2s silence");
        }, 2000); // 2s silence detection
      };

      recognitionRef.current.onerror = (event) => {
        console.error("🎤 Speech recognition error:", event.error);
        if (event.error === "not-allowed") {
          alert(
            "Microphone access was blocked. Please allow mic permission in your browser."
          );
        }
      };

      recognitionRef.current.onend = () => {
        console.log("🎤 Voice recognition ended.");
        setIsListening(false);
      };
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        console.log("🎙️ Starting recognition...");
      } catch (err) {
        console.error("❌ Failed to start recognition:", err);
      }
    }
  };
  // ///////////////////////////////////////
  /////////////////////////////////////////
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const [isTranscribing, setIsTranscribing] = useState(false);

  const handleMicClick = async () => {
    if (!isListening) {
      // Start recording
      setIsListening(true);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        streamRef.current = stream;

        const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
        recorderRef.current = recorder;

        let chunks = [];
        recorder.ondataavailable = (e) => chunks.push(e.data);

        recorder.onstop = () => handleTranscription(chunks);

        recorder.start();
      } catch (err) {
        console.error("Mic error:", err);
        alert("Failed to access microphone.");
        setIsListening(false);
      }
    } else {
      // Stop recording
      recorderRef.current?.stop();
      streamRef.current?.getTracks().forEach((track) => track.stop());
      setIsListening(false);
      setIsTranscribing(true);
      setInput("Transcribing...");
    }
  };

  const handleTranscription = async (chunks) => {
    const blob = new Blob(chunks, { type: "audio/webm" });
    const file = new File([blob], "mic_recording.webm", { type: "audio/webm" });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("model_id", "scribe_v1");
    formData.append("language_code", "eng");

    try {
      const res = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
        method: "POST",
        headers: {
          "xi-api-key": "sk_a3b939e3a1df5e96fefe21d05a16feb39654807b74719a74",
        },
        body: formData,
      });

      const transcriptJson = await res.json();
      console.log("📡 ElevenLabs STT response:", transcriptJson);

      const text =
        transcriptJson.text ||
        transcriptJson.transcripts?.[0]?.transcript ||
        "";

      if (text) {
        setInput(text.trim());
      } else {
        alert("No transcription returned.");
      }
    } catch (err) {
      console.error("Transcription error:", err);
      alert("Failed to transcribe the audio.");
    } finally {
      setIsTranscribing(false);
    }
  };

  // Decide which method to use
  const handleVoiceInput2 = () => {
    stopSpeaking();
    if (isAppleDevice()) {
      handleMicClick();
    } else {
      handleBrowserSpeechRecognition();
    }
  };

  // ////////////////////////////////////
  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sessionId, sender: "user", content: input },
    ]);

    setInput("");

    try {
      const { data } = await axios.post(
        "https://api.smartlearner.com/api/chatbot/chat",
        {
          sessionId,
          message: input,
        }
      );
      if (
        typeof data.reply.data === "object" &&
        data.reply.data.type === "productList"
      ) {
        const productListText = data.reply.data.products
          .map((product) => `${product.name} for £${product.price}`)
          .join(", ");

        speakText(productListText);

        setMessages((prev) => [
          ...prev,
          { sessionId, sender: "admin", content: data.reply.data },
        ]);
      } else {
        await typeBotMessage(addEmojis(data.reply.data || ""));
      }

      setInput("");
      scrollToBottom();

      setIsTyping(true);
    } catch (e) {
      console.error(e);
      await typeBotMessage(
        "we dont have knowledge about it please click Live Chat Button"
      );
    } finally {
      setIsTyping(false);
      scrollToBottom();
    }
  };

 

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", content: email }]);
    scrollToBottom();
    setEmail("");
    setIsTyping(true);
    try {
      const { data } = await axios.post(
        "https://api.smartlearner.com/api/chatbot/chat",
        {
          sessionId,
          message: email,
        }
      );
      await typeBotMessage(addEmojis(data.reply.data || ""));
      if (data.reply.message === "Please enter your password to continue.") {
        setEmailSetSubmitted2(true);
        setPasswordRequired(true);
        console.log("🔐 Server replied:", data.reply.message);
      } else if (data.reply.message === "email submitted successfully") {
        setEmailSetSubmitted(true);
        setEmailSubmitted(true);
        localStorage.setItem("userEmail", data.reply.email);
        setSendLiveEmail(data.reply.email);
      }
      console.log("check", data.reply.email);
    } catch (e) {
      console.error(e);
      await typeBotMessage("Oops, that didn't work. Please try again.");
    } finally {
      setIsTyping(false);
      scrollToBottom();
    }
  };

  // ////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////

  const handleLiveChatSend = () => {
    if (!liveChatInput.trim()) return;

    const createdAt = new Date().toISOString();

    const userMsg = {
      sessionId,
      sender: "user",
      content: liveChatInput,
      email: sendLiveMail,
      liveChat: true,
      createdAt, // Optional flag to distinguish live chat
    };

    // Send message via socket
    socket.emit("sendMessage", userMsg);

    // Clear input
    setLiveChatInput("");

    scrollToBottom();
  };
  // //////////////////////////////////
  const getUKDate = () => {
    const ukDateStr = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());

    // Parse "dd/mm/yyyy, HH:MM:SS" into a Date object manually
    const [datePart, timePart] = ukDateStr.split(", ");
    const [day, month, year] = datePart.split("/");
    const [hours, minutes, seconds] = timePart.split(":");

    return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
  };

  const isWithinSupportHours = () => {
    const now = getUKDate(); // UK time

    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const totalMinutes = hours * 60 + minutes;

    if (day >= 1 && day <= 5) {
      // Monday to Friday: 9:00 AM – 7:00 PM
      return totalMinutes >= 9 * 60 && totalMinutes <= 19 * 60;
    } else if (day === 0 || day === 6) {
      // Saturday & Sunday: 10:00 AM – 4:00 PM
      return totalMinutes >= 10 * 60 && totalMinutes <= 16 * 60;
    }

    return false; // fallback
  };

  const handleJoinLiveChat = () => {
    console.log("👉 Join Live Chat clicked");

    if (joinedChat) return; // Prevent duplicate joins

    setJoinedChat(true); // Switch to live chat mode
    localStorage.setItem("liveChat", "true");

    const isAvailable = isWithinSupportHours();
    console.log("📡 Is live chat available?", isAvailable);

    if (!isAvailable) {
      // Inform user via chatbot message
      const unavailableMsg = {
        sessionId,
        sender: "admin",

        content:
          "⏰ Live chat is available Mon–Fri 9 AM–7 PM | Sat–Sun 10 AM–4 PM. Leave your contact details, and we’ll reach out. End the chat to continue with SmartBot.",
        email: sendLiveMail, // ✅ Add user email
      };

      // Send message via socket so it appears in both admin and user UI
      socket.emit("sendMessage", unavailableMsg);
      socket.emit("newChatRequest", { sessionId, email: sendLiveMail });
      return; // Don't allow joining live chat
    }

    const userMsg = {
      sessionId,
      sender: "user",
      content: "👉 connecting to admin...",
      email: sendLiveMail,
    };

    console.log("🟡 Emitting newChatRequest with:", sessionId);
    // Send to server via socket
    socket.emit("sendMessage", userMsg);
    socket.emit("newChatRequest", { sessionId, email: sendLiveMail });
    console.log("✅ Emitted newChatRequest");
  };
  const handleEndChat = () => {
    const createdAt = new Date().toISOString();

    const endMsg = {
      sessionId,
      sender: "user",
      content: "🚫 User has ended live chat",
      email: sendLiveMail,
      liveChat: true,
      createdAt,
    };

    socket.emit("sendMessage", endMsg);

    setLiveChatInput("");
    scrollToBottom();

    // Update state and remove from localStorage
    setJoinedChat(false);
    localStorage.removeItem("liveChat");
  };
  useEffect(() => {
    const storedLiveChat = localStorage.getItem("liveChat");
    if (storedLiveChat === "true") {
      setJoinedChat(true);
    }
  }, []);

  // //////////////////////////////////////////////////
  const fullText = "Welcome I'm SmartBot. Please enter First-Name to continue";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50); // Typing speed in ms
      return () => clearTimeout(timeout);
    } else if (index === fullText.length) {
      // Speak welcome message when typing is done
    }
  }, [index, fullText]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!sessionId) return;

      try {
        // Fetch messages from both APIs
        const [chatbotRes, liveChatRes] = await Promise.all([
          axios.get(
            `https://api.smartlearner.com/api/chatbot/messages/${sessionId}`
          ),
          axios.get(`https://api.smartlearner.com/api/chat-all/${sessionId}`),
        ]);

        // Merge both message arrays
        const combinedMessages = [
          ...chatbotRes.data.messages,
          ...liveChatRes.data,
        ];

        // Sort messages by timestamp (adjust field name as needed)
        combinedMessages.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

        setMessages(combinedMessages);

        // Email and session state setup (optional, reusing your logic)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const userEmailMsg = combinedMessages.find(
          (msg) => msg.sender === "user" && emailRegex.test(msg.content)
        );
        if (userEmailMsg) setEmail(userEmailMsg.content);

        const userEmailMsg2 = combinedMessages.find(
          (msg) => msg.sender === "user"
        );
        if (userEmailMsg2) {
          setEmailSubmitted(true);
          setEmailSetSubmitted(true);
        }

        const userEmailMsg3 = combinedMessages.find((msg) => msg.pass === true);
        if (userEmailMsg3) {
          setEmailSetSubmitted2(true);
          setEmailSubmitted(true);
          setEmailSetSubmitted(true);
        }

        const userEmailMsg4 = combinedMessages.find(
          (msg) => msg.login === true
        );
        if (userEmailMsg4) {
          setPasswordSubmitted(true);
          setEmailSubmitted(true);
          setEmailSetSubmitted(true);
        }
      } catch (err) {
        console.error("❌ Error loading messages:", err);
      }
    };

    fetchMessages();
  }, [sessionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chat-heading">
        <div className="chat-header"></div>
      </div>
      <div className="chat-messages">
        <div className="chat-bubble bot-msg typing-animation">
          👋 {displayedText}
        </div>

        {messages.map((m, idx) => {
          if (!m.content && !m.typing) return null;
          if (
            m.sender === "admin" &&
            typeof m.content === "object" &&
            m.content.type === "productList"
          ) {
            return (
              <div key={idx} className="chat-bubble bot-msg">
                <p>
                  🛍️ Products in <strong>{m.content.category}</strong> category:
                </p>
                <ul className="product-list" style={{ padding: "0px 0.5rem" }}>
                  {m.content.products.map((product, index) => {
                    const productId = `${product.id}_${index}_${product.price}`;
                    const alreadyAdded = (myCart || []).find(
                      (item) => item.id === productId
                    );

                    return (
                      <li key={productId} className="product-item-chatbot">
                        <span>
                          {product.name} - £{product.price}
                        </span>
                        {alreadyAdded ? (
                          <span style={{ color: "green" }}>✅ Added</span>
                        ) : (
                          <button
                            className="bookNow"
                            onClick={() => handleAddToCart(product, index)}>
                            Book
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
          return (
            <div
              key={idx}
              className={`chat-bubble ${
                m.sender === "user" ? "user-msg" : "bot-msg"
              }`}>
              {m.sender === "user" ? (
                <>
                  {" "}
                  <img
                    src={userImg}
                    alt="User"
                    className="avatar user-avatar"
                  />
                  {m.content}
                </>
              ) : (
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  {" "}
                  <img src={botImg} alt="Bot" className="avatar bot-avatar" />
                  <p
                    style={{ marginBottom: "0px" }}
                    dangerouslySetInnerHTML={{
                      __html: m.content.replace(/\n/g, "<br />"),
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
        {isTyping && (
          <div className="chat-bubble bot-msg typing">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {!emailSubmitted && getValidSession() ? (
        // Show email input first
        <form className="chat-input-area" onSubmit={handleEmailSubmit}>
          <input
            placeholder="Enter your first name..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <IoSend onClick={handleEmailSubmit} className="chatBtn" />
        </form>
      ) : (
        <>
          {/* Show chatbot input if live chat has NOT been joined */}
          {emailSubmitted && !joinedChat ? (
            <div className="chat-input-area">
              <button
                onClick={handleVoiceInput2}
                className={`mic-btn ${isListening ? "listening" : ""}`}>
                {isListening ? <IoMicOff /> : <IoMic />}
              </button>

              <input
                placeholder={isListening ? "Listening..." : "Type or speak..."}
                value={input}
                onChange={(e) => {
                  if (!isTranscribing) setInput(e.target.value);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                disabled={isTranscribing}
              />
              <IoSend onClick={handleSend} className="chatBtn" />
            </div>
          ) : (
            <></>
          )}

          {/* Show live chat input if live chat HAS been joined */}
          {joinedChat && (
            <>
              <div className="chat-input-area">
                <input
                  placeholder="Type your message to live agent..."
                  value={liveChatInput}
                  onChange={(e) => setLiveChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLiveChatSend()}
                />
                <IoSend onClick={handleLiveChatSend} className="chatBtn" />
              </div>
              <button className="end-chat-btn" onClick={handleEndChat}>
                ❌ End Chat
              </button>
            </>
          )}

          {/* Always show this button after email is submitted, until joined */}
          {!joinedChat && emailSetSubmitted ? (
            <button className="live-chat-btn" onClick={handleJoinLiveChat}>
              Join Live Chat
            </button>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default Chatbot;
