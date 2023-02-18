import AboutImg from "../assets/night.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import styles from "../components/Hero.module.css";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(props) {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Sobre"
        btnClass={styles.hide}
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
