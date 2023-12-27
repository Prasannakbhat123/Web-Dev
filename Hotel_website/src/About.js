import "./About.css";

const About = () => {
  return (
    <div className="black-box" id="abt-sec">
      <div className="About-us">
        <div>
          <img src="bg.jpeg" alt="abt" className="about-img" />
        </div>
        <div className="description">
          <h1 className="abt">About Us</h1>
          <p className="para">
            Embark on a culinary journey through the vibrant flavors of
            Hyderabad, the spice-infused delights of Kerala, the rich textures
            of Karnataka, and the aromatic cuisine of Tamil Nadu. Our haven
            celebrates the diversity of South Indian cuisine, capturing the
            essence of each region's culinary treasures. From the tangy rasams
            to the fiery curries, experience the authentic essence of Southern
            India on every plate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
