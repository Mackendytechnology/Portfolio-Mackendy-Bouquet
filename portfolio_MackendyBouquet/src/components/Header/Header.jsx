import portfolio from "../../assets/portfolio.png";
import styles from "./style.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src={portfolio} alt="Portfolio" />
        <nav>
          <a className="tab" href="#about">
            About
          </a>
          <a className="tab" href="#stack">
            Stack
          </a>
          <a className="tab" href="#projects">
            Project
          </a>
        </nav>
        <button
          type="button"
          className="clicker"
          onClick={() => {
            location.replace("#footer");
          }}
        >
          Contact
        </button>
      </div>
    </header>
  );
};
