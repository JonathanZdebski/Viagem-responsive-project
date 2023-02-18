import styles from "../components/Hero.module.css";

function Hero(props) {
  return (
    <div className={styles.cName}>
      <img alt="HeroImg" src={props.heroImg} />

      <div className={styles.herotext}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
