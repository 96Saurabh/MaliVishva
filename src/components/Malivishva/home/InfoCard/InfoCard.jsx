import styles from "./InfoCard.module.css";

const InfoCard = ({ imageSrc, title, info, buttonText }) => {
  return (
    <>
      
      <div className={styles.card}>
        <img src={imageSrc} alt={title} className={styles.image} />
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{info}</p>
          <button className={styles.button}>{buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
