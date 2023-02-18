import { useState } from "react";
import styles from "../components/Login.module.css";
import axios from "axios";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Register);

    try {
      let res = await axios.post("http://localhost:5000/register", {
        email: email,
        pass: pass,
        name: name,
      });

      if (res.status === 200) {
        setEmail("");
        setPass("");
        setMessage("");
      } else {
        setMessage("Registro Realizado!");
      }
    } catch (err) {
      console.log(err);
      setMessage("Erro ao fazer o registro.");
    }
  };

  return (
    <div className={styles.authformcontainer}>
      <form className={styles.registerform} onSubmit={handleSubmit}>
        <label htmlFor="nome">Seu nome</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="seuemail@gmail.com"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          value={pass}
          type="password"
          placeholder="******"
          id="password"
          name="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Registrar</button>
        <button
          className={styles.btnSwitch}
          onClick={() => props.onFormSwitch("Login")}
        >
          Já tem uma conta? Entre aqui
        </button>
        <div className={styles.setMessage}>
          {message ? <p className={styles.setMessage2}>{message}</p> : null}
        </div>
      </form>
    </div>
  );
};
