import Carrousel from "./Carrousel";
import Timer from "./Timer";

const Featured = () => {
  return (
    <div className="featured_container">
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <Timer />
    </div>
  );
};

export default Featured;
