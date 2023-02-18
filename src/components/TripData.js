import styles from "../components/Trip.module.css";

function TripData(props) {
  return (
    <div className={styles.tcard}>
      <div className={styles.timage}>
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
