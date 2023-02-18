import styles from "../components/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div>
          <h1>Viagem</h1>
          <p>Escolha o seu destino favorito</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>

        <div className={styles.bottom}>
          <div>
            <h4>Projeto</h4>
            <a href="/">ChangeLog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Comunidade</h4>
            <a className={styles.a1} href="/">
              GitHub
            </a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Ajuda</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Outros</h4>
            <a href="/">Term of Service</a>
            <a href="/">Provacy Polucy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
