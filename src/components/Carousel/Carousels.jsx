import { Carousel } from "react-responsive-carousel";
import { imgs } from "./Img/Data"; // Assuming imgs is exported correctly from "./Img/Data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

const Carousels = () => {
  console.log(imgs); // Output imgs to console for debugging
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {/* Map over imgs array to generate carousel images */}
        {imgs.map((imglink) => {
          return <img key={imglink} src={imglink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default Carousels;
