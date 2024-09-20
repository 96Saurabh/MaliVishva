import styles from "./Section.module.css";

const Section = ({ title, subtitle, imgSrc, reverse, bgColor }) => {
  return (
    <div className={styles.section} style={{ backgroundColor: bgColor }}>
      <div
        className={styles.content}
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={styles.image}>
          <img src={imgSrc} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Section;
