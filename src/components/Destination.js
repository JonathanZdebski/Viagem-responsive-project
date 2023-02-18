import styles from "../components/Destination.module.css";
import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

const Destination = () => {
  return (
    <div className={styles.destination}>
      <DestinationData
        h1={"Destinos Populares"}
        p={"Os tours te darão a oportunidade de ver muitas coisas."}
        className={styles.firstdes}
        heading="Rio de Janeiro"
        text="Rio de Janeiro (informalmente referido como Rio) é um município
        brasileiro, capital do estado homônimo, situado no Sudeste do
        país. Maior destino turístico internacional no Brasil, da América
        Latina e de todo o Hemisfério Sul (em 2008), a capital fluminense
        é a cidade brasileira mais conhecida no exterior, funcionando como
        um espelho, ou retrato nacional, seja positiva ou
        negativamente."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className={styles.firstdesreverse}
        heading="História"
        text="O litoral do atual estado do Rio de Janeiro era habitado por índios do tronco linguístico macro-jê há milhares de anos. Por volta do ano 1000, a região foi conquistada por povos de língua tupi procedentes da Amazônia. Um destes povos, os tamoios, também conhecidos como tupinambás, ocupava a região ao redor da Baía de Guanabara no século XVI, quando os portugueses chegaram à região."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
