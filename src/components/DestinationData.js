import { Component } from "react";
import styles from "../components/Destination.module.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={styles.destination}>
        <h1>{this.props.h1}</h1>
        <p>{this.props.p}</p>
        <div className={this.props.className}>
          <div className={styles.destext}>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className={styles.image}>
            <img alt={styles.img} src={this.props.img1} />
            <img alt={styles.img} src={this.props.img2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
