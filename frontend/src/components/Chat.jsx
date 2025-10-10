import "../css/Chat.css";
import { useContext } from "react";
import { Context } from "../context/Context";
import ReactMarkdown from "react-markdown";
import highlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const Chat = () => {
  const { newChat, prevChats } = useContext(Context);

  return (
    <>
      {newChat && <h1>Start a new Chat!</h1>}
      <div className="chats">
        {prevChats?.map((chat, idx) => (
          <div
            className={chat.role === "user" ? "userDiv" : "gptDiv"}
            key={idx}
          >
            {chat.role === "user" ? (
              <p className="userMessage">{chat.content}</p>
            ) : (
              <ReactMarkdown rehypePlugins={[highlight]}>
                {chat.content}
              </ReactMarkdown>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Chat;
