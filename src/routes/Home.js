import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Img12 from "../assets/12.jpg";
import Destination from "../components/Destination";
import styles from "../components/Hero.module.css";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Img12}
        title="Nossa Jornada é a sua História"
        text="Selecione seus destinos favoritos."
        buttonText="Plano de Viagem"
        url="/"
        btnClass={styles.show}
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
