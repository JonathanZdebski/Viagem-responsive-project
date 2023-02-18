import styles from "../components/Trip.module.css";
import TripData from "../components/TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className={styles.trip}>
      <h1>Viagens Recentes</h1>
      <p>Você pode descobrir um único destino usando Google Maps</p>
      <div className={styles.tripcard}>
        <TripData
          image={Trip1}
          heading="Viagem ao Arraial do Cabo"
          text="Arraial do Cabo é uma cidade costeira no estado do Rio de Janeiro, no sudeste do Brasil. É conhecida por praias de areia branca como Grande, Forno e Pontal do Atalaia. Offshore são locais de mergulho em naufrágios e a Gruta Azul. Na vizinha Ilha de Cabo Frio, as ruínas do Farol de Cabo Frio datam de 1836. Ao norte, a cidade de Cabo Frio abriga o Forte São Mateus do século XVII, construído pelos portugueses."
        />
        <TripData
          image={Trip2}
          heading="Viagem à Florianópolis"
          text="Florianópolis, a capital do estado de Santa Catarina, no sul do Brasil, é composta principalmente pela Ilha de Santa Catarina, com 54 km de extensão. É famosa por suas praias, incluindo áreas de resort populares, como a Praia dos Ingleses, na ponta norte da ilha. Sua Lagoa da Conceição, uma lagoa de água salgada, é popular para windsurf e passeios de barco. A Ponte Pedro Ivo Campos liga a ilha a um distrito comercial do continente"
        />
        <TripData
          image={Trip3}
          heading="Viagem à Gramado"
          text="Gramado é uma cidade montanhosa no estado mais ao sul do Brasil, o Rio Grande do Sul. Influenciada pelos colonos alemães do século 19, a cidade tem um ar bávaro com chalés alpinos, chocolatiers e lojas de artesanato. Gramado também é conhecida por suas luzes natalinas e pelas flores de hortênsias na primavera. O Lago Negro oferece aluguel de barcos e caminhadas pela floresta, enquanto a Serra Gaúcha oferece trilhas para caminhadas e escaladas."
        />
      </div>
    </div>
  );
}

export default Trip;
