import styles from "../components/Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../components/MenuItems";
import { useState } from "react";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  function handleLinkClick() {
    setClicked(false);
    window.scrollTo(0, 0);
  }

  return (
    <nav className={styles.NavbarItems}>
      <a href="/">
        <h1 className={styles.navlogo}>Viagem</h1>
      </a>

      <div className={styles.menuicons} onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? styles.navmenuactive : styles.navmenu}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.cName}
                to={item.url}
                onClick={handleLinkClick}
              >
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
