import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Login } from "../components/Login.jsx";
import { Register } from "../components/Register";
import { useState } from "react";
import Hero from "../components/Hero";
import LoginImg from "../assets/10.jpg";
import styles from "../components/Hero.module.css";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState("login");

  const toogleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={LoginImg}
        title="Fazer Login"
        btnClass={styles.hide}
      />
      {currentForm === "Login" ? (
        <Login onFormSwitch={toogleForm} />
      ) : (
        <Register onFormSwitch={toogleForm} />
      )}
      <Footer />
    </div>
  );
}

export default LoginPage;
