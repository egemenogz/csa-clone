import Carousel from "./components/Carousel";
import ContentHome from "./components/ContentHome";
import InfoCsa from "./components/InfoCsa";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="container" style={{padding:'1rem 8rem'}}>
        <InfoCsa />
        <ContentHome />
      </div>
    </>
  );
}
