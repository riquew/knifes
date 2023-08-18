import React from "react";
import styles from "./Footer.module.css";
import logoMadeira from "../img/logoMadeira.png";
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import youtube from "../img/youtube.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={"container " + styles.content}>
        <div>
          <ul className={styles.contato}>
            <p>CONTATO</p>
            <li>(11) 99999 - 9999</li>
            <li>domfacone@gmail.com</li>
            <li>Rua Barao Rio Preto, 813</li>
            <li>Jundiai - SP</li>
          </ul>
          <ul className={styles.socialMedias}>
            <li>
              <a href="">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={youtube} alt="" />
              </a>
            </li>
            <li></li>
          </ul>
        </div>

        <img src={logoMadeira} alt="" />
      </div>
    </div>
  );
};

export default Footer;
