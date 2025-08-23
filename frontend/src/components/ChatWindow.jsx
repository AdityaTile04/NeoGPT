import "../css/ChatWindow.css";
import Chat from "./Chat";

const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <div className="navbar">
        <span>
          NeoGPT <i class="fa-solid fa-chevron-down"></i>
        </span>
        <div className="userIconDiv">
          <span>
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
      <Chat></Chat>

      <div className="chatInput">
        <div className="inputBox">
          <input type="text" placeholder="Ask anything" />
          <div id="submit">
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
