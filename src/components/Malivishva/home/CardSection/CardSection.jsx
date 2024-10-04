import InfoCard from "../InfoCard/InfoCard";
import styles from "./CardSection.module.css";

const CardSection = () => {
  const cards = [
    {
      imageSrc:
        "https://dataspace.com/wp-content/uploads/2023/07/AI-job-titles.png",
      title: "Jobs",
      info: "Find high-demand jobs in IT, software development, data science, and more. Connect with top tech companies that are looking for talented professionals like you.",
      buttonText: "Read More",
    },
    {
      imageSrc:
        "https://www.shutterstock.com/image-photo/portrait-kid-schoolboy-vr-virtual-600nw-2339660317.jpg",
      title: "Education",
      info: "Unlock learning opportunities with top educational programs. From undergraduate courses to professional certifications, our platform helps you grow your skills and knowledge.",
      buttonText: "Read More",
    },
  ];

  return (
    <>
    <div className={styles.maincard}>
    <h1 className={styles.title}>Why Choose us Services / Milestone</h1>
      <div className={styles.cardSection}>
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            info={card.info}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
      
    </>
  );
};

export default CardSection;
