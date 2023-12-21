import { username } from "../../../data/user";
import bannerImg from "../../../assets/banner.jpg";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <section className={styles.sectionText}>
          <span className="tag">{username}</span>
          <h1 className="type1">Glad to have you on my portfolio</h1>
          <p className="tab">check my LinkedIn</p>
          <button
            className="clicker"
            onClick={() =>
              location.replace(
                "https://www.linkedin.com/in/mackendy-bouquet-921337288/"
              )
            }
          >
            know more
          </button>
        </section>
        <img src={bannerImg} />
      </div>
    </section>
  );
};
