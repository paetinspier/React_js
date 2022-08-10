import { useState, useEffect } from "react";
import Footer from "./Footer";
import Clock from "./Clock";

const City = () => {
  const [offsetY, setOffsetY] = useState();
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section>
      <div className="parallax1">
        <div style={{ transform: `translateX(${offsetY * 0.05}px)` }}>
          <Clock tz="PST" />
        </div>
      </div>
      <div className="parallax2">
        <div style={{ transform: `translateX(${offsetY * 0.05}px)` }}>
          <Clock tz="EST" />
        </div>
      </div>
      <div className="parallax3">
        <div style={{ transform: `translateX(${offsetY * 0.05}px)` }}>
          <Clock tz="GMT" />
        </div>
      </div>
      <div className="parallax4">
        <div style={{ transform: `translateX(${offsetY * 0.05}px)` }}>
          <Clock tz="HKT" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default City;
