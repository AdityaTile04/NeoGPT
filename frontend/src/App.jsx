import "./css/App.css";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";
import { Context } from "./context/Context";

const App = () => {
  const providerValues = {};

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
