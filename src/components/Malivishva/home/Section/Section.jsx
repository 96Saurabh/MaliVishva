import LeftImageRightText from "../LeftImageRightText/LeftImageRightText";

const ContentSection = () => {
  const sections = [
    {
      imageSrc:
        "https://media.istockphoto.com/id/1186214696/photo/hindu-wedding-ritual-wherein-bride-and-groom-hand.jpg?s=612x612&w=0&k=20&c=fTlNejRdY7dkvk742auNgI3j6Ve9UqqWSnb3QJ-D2gw=",
      text: "This is the text for the marraige section.",
      buttonText: "Learn More",
      reverse: false,
    },
    {
      imageSrc:
        "https://t4.ftcdn.net/jpg/06/69/95/09/360_F_669950938_7EGCde3piThlCL3c4TLC76N50KJRW66d.jpg",
      text: "This is the text for the bussiens  section.",
      buttonText: "Discover",
      reverse: true,
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54BednkC1IsyAf_9ERoTCQ58kS0qmppqISE_jLqaLbCeJ4HDjuOwZLP9snQ_-cTahtKo&usqp=CAU",
      text: "This is the text for the news section.",
      buttonText: "Explore",
      reverse: false,
    },
    {
      imageSrc:
        "https://gratisography.com/wp-content/uploads/2024/01/gratisography-covered-in-confetti-800x525.jpg",
      text: "This is the text for the freechess section.",
      buttonText: "Read More",
      reverse: true,
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <LeftImageRightText
          key={index}
          imageSrc={section.imageSrc}
          text={section.text}
          buttonText={section.buttonText}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
};

export default ContentSection;
