import "./css/App.css";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";
import { Context } from "./context/Context";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);

  const providerValues = {
    prompt,
    setPrompt,
    reply,
    setReply,
    currThreadId,
    setCurrThreadId,
    newChat,
    setNewChat,
    prevChats,
    setPrevChats,
  };

  return (
    <div className="app">
      <Context.Provider value={providerValues}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </Context.Provider>
    </div>
  );
};

export default App;
