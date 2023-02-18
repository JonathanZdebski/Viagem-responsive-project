import styles from "../components/ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.formcontainer}>
      <h1>Entre em contato conosco!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Assunto" />
        <textarea placeholder="Mensagem" rows="4"></textarea>
        <button>Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default ContactForm;
