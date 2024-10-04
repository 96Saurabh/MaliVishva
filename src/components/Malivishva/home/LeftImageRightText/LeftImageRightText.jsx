import styles from "./LeftImageRightText.module.css"

const LeftImageRightText = ({ imageSrc, text, buttonText, reverse }) => {
  return (
    <div className={styles.LeftImageRightText} style={{ display: 'flex', flexDirection: reverse ? 'row-reverse' : 'row', margin: '20px 0' }}>
      <div style={{ flex: 1 }}>
        <img className={styles.image} src={imageSrc} alt="Side Image" />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>{text}</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LeftImageRightText;
