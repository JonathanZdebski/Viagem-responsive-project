import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpg";
import styles from "../components/Hero.module.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Contato"
        btnClass={styles.hide}
      />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
