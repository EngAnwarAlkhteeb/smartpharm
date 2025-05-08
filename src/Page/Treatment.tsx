import Carousel from "react-bootstrap/Carousel";
import Card from "../Components/Card/Card"; // Import your Card component
import Img1 from "../../assets/img/Trea01.jpg"; // Import image for Card 1
import Img2 from "../../assets/img/Trea02.jpg"; // Import image for Card 2
import Img3 from "../../assets/img/Trea03.jpg"; // Import image for Card 3

function Treatment() {
  return (
    <Carousel>
      {/* First Slide */}
      <Carousel.Item interval={1000}>
        <Card
          image={Img1}
          title="First Card Title"
          details="Nulla vitae elit libero, a pharetra augue mollis interdum."
        />
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item interval={500}>
        <Card
          image={Img2}
          title="Second Card Title"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <Card
          image={Img3}
          title="Third Card Title"
          details="Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Treatment;
