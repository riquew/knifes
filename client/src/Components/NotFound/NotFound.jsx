import React from "react";
import styles from "./NotFound.module.css";
import brokenKnife from "../../img/notFound/404.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <h1>404</h1>
        <img src={brokenKnife} alt="" />
        <p>Parece que tem algo quebrado...</p>
      </div>
    </div>
  );
};

export default NotFound;
