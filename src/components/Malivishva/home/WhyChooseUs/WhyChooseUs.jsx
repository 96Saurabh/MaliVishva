import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const points = [
    { title: "Job", description: "Get the best job opportunities." },
    { title: "News", description: "Stay updated with the latest news." },
    { title: "Education", description: "Learn from experts." },
    { title: "Franchise", description: "Grow your business with us." }
  ];

  return (
    <div className={styles.whyChooseUs}>
      <h2>Why Choose Us</h2>
      <div className={styles.points}>
        {points.map((point, index) => (
          <div key={index} className={styles.point}>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
