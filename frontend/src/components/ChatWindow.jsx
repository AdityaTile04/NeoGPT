import { useContext } from "react";
import "../css/ChatWindow.css";
import Chat from "./Chat";
import { Context } from "../context/Context";

const ChatWindow = () => {
  const { prompt, setPrompt, reply, setReply, currThreadId } =
    useContext(Context);

  const getReply = async () => {
    console.log("message ", prompt, " threadId ", currThreadId);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: prompt,
        threadId: currThreadId,
      }),
    };

    try {
      const response = await fetch("http://localhost:3000/api/chat", options);
      const res = await response.json();
      console.log(res);
      setReply(res.reply);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatWindow">
      <div className="navbar">
        <span>
          NeoGPT <i className="fa-solid fa-chevron-down"></i>
        </span>
        <div className="userIconDiv">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
      <Chat></Chat>

      <div className="chatInput">
        <div className="inputBox">
          <input
            type="text"
            placeholder="Ask anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? getReply() : "")}
          />
          <div id="submit" onClick={getReply}>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
        <p className="info">
          NeoGPT can make mistakes. Check important info. See Cookie
          Preferences.
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;
