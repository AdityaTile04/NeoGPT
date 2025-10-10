import "../css/Sidebar.css";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const Sidebar = () => {
  const { allThread, setAllThread, currThreadId } = useContext(Context);

  const getAllThreads = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/thread");
      const res = await response.json();
      console.log(res);

      const filteredData = res.map((thread) => ({
        threadId: thread.threadId,
        title: thread.title,
      }));
      console.log(filteredData);
      setAllThread(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllThreads();
  }, [currThreadId]);

  return (
    <section className="sidebar">
      <button>
        <img src="src/assets/blacklogo.png" alt="bg" className="logo"></img>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <ul className="history">
        {allThread?.map((thread, idx) => (
          <li key={idx}>{thread.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
