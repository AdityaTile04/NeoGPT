import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <button>
        <img src="src/assets/blacklogo.png" alt="bg" className="logo"></img>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <ul className="history">
        <li>Thread1</li>
        <li>Thread1</li>
        <li>Thread1</li>
      </ul>
    </section>
  );
};

export default Sidebar;
