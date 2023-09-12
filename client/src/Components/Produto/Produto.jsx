import React from "react";
import { useParams } from "react-router-dom";
import Api from "../../Api";
import Rating from "@mui/material/Rating";
import styles from "./Produto.module.css";

const Produto = () => {
  const id = useParams();
  const [loading, setLoading] = React.useState(true);
  const [info, setInfo] = React.useState();

  // function editaPreco(preco) {
  //   const precoEditado = preco.toFixed(2).toString().replace(".", ",");
  //   return precoEditado;
  // }

  React.useEffect(() => {
    function getInfo() {
      Api.get(`produtos/${id.id}`).then((response) =>
        setInfo(response.data[0])
      );
      setLoading(false);
    }
    getInfo();
  }, [id]);

  return (
    <div className="container">
      {console.log(info)}
      {loading && <span>Carregando...</span>}
      {!loading && info && (
        <>
          <h1 className="titulo-container">{info.NOME}</h1>
          <div className={styles.produtoConteudo}>
            <div className={styles.produtoImagem}>
              <div className={styles.imgPrincipal}>
                <img src={info.IMAGEM} alt="" />
              </div>
              <div className={styles.imagensOutras}>
                <img src={info.IMAGEM} alt="" />
                <img src={info.IMAGEM} alt="" />
                <img src={info.IMAGEM} alt="" />
              </div>
            </div>
            <div className={styles.produtoInfo}>
              <div>
                <h3>{info.NOME}</h3>
                <p>Código do Produto: {info.ID}</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  size="large"
                  readOnly
                />
              </div>
              <div className={styles.cardDecorador}></div>
              <div>
                <h3>R$ {info.PRECO.replace(".", ",")}</h3>
                <p>{info.PRECO}</p>
              </div>
              <div className={styles.cardDecorador}></div>
              <div>
                <button>COMPRAR</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Produto;
