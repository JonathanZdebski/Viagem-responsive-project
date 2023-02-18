import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import styles from "../components/Hero.module.css";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Serviços"
        btnClass={styles.hide}
      />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
