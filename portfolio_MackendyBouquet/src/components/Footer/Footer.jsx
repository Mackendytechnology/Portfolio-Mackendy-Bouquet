import whats from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import github from "../../assets/github-icon.png";
import styles from "./styles.module.css";
//footer 
export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div>
          <h2 className="type2">Contact</h2>
          <div className={styles.imgs}>
            <img
              src={whats}
              alt="whatsapp"
              onClick={() => location.replace("https://web.whatsapp.com/")}
            />
            <img
              src={linkedin}
              alt="linkedin"
              onClick={() =>
                location.replace(
                  "https://www.linkedin.com/in/mackendy-bouquet-921337288/"
                )
              }
            />
            <img
              src={github} 
              alt="github"
              onClick={() =>
                location.replace("https://github.com/Mackendytechnology")
              }
            />
          </div>
        </div>
        <span className="tab">All copyrights reserved - Mack-B</span>
      </div>
    </footer>
  );
};
