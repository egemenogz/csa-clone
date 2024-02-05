import Carousel from "react-bootstrap/Carousel";
import CSAbasket from "../../assets/CSAbasket.jpg";
import CSAmap from "../../assets/CSAmap.jpg";
import CSAvariety from "../../assets/CSAvariety.jpg";
import CSAwide from "../../assets/CSAwide.jpg";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" style={{zIndex:"-1"}}>
      <Carousel.Item>
        <img className="d-block w-100" src={CSAbasket} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CSAmap} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CSAvariety} alt="Third slide" />
        <Carousel.Caption>
          <p>https://github.com/egemenogz/</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CSAwide} alt="Third slide" />
        <Carousel.Caption>
          <p>https://github.com/egemenogz/</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
