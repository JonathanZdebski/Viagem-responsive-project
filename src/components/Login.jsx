import { useState } from "react";
import styles from "../components/Login.module.css";
import axios from "axios";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);

    try {
      let res = await axios.post("http://localhost:5000/login", {
        email: email,
        pass: pass,
      });

      if (res.status === 200) {
        setEmail("");
        setPass("");
        setMessage("");
      } else {
        setMessage("Login Realizado!");
      }
    } catch (err) {
      console.log(err);
      setMessage("Erro ao fazer login.");
    }
  };

  return (
    <div className={styles.authformcontainer}>
      <form className={styles.loginform} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="seuemail@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <input
          value={pass}
          type="password"
          placeholder="******"
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
        <button
          className={styles.btnSwitch}
          onClick={() => props.onFormSwitch("Register")}
        >
          Não tem uma conta? Registre-se
        </button>
        <div className={styles.setMessage}>
          {message ? <p className={styles.setMessage2}>{message}</p> : null}
        </div>
      </form>
    </div>
  );
};
