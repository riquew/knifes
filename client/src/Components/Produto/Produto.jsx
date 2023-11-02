import React from "react";
import { useParams } from "react-router-dom";
import Api from "../../Api";
import Rating from "@mui/material/Rating";
import styles from "./Produto.module.css";

const Produto = () => {
  const id = useParams();
  const [loading, setLoading] = React.useState(true);
  const [info, setInfo] = React.useState();
  const [frete, setFrete] = React.useState(false);
  const [form, setForm] = React.useState({
    cep: "",
  });
  const padraoFrete = 10;

  React.useEffect(() => {
    function getInfo() {
      Api.get(`produtos/${id.id}`).then((response) =>
        setInfo(response.data[0])
      );
      setLoading(false);
    }
    getInfo();
  }, [id]);

  function precoPix(preco) {
    preco = preco * 0.9;
    const precoPixEditado = precoEditado(preco);
    return precoPixEditado;
  }

  function precoEditado(preco) {
    preco = +preco;
    preco = preco.toFixed(2);
    preco = preco.toString();
    const precoEditado = preco.replace(".", ",");
    return precoEditado;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFrete(true);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div className="container">
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
                <h3>
                  R$ {precoPix(info.PRECO)}
                  <span className={styles.precoPix}> no Pix</span>
                </h3>
                <p>
                  ou R$ {precoEditado(info.PRECO)} em ate 10x R${" "}
                  {precoEditado(info.PRECO / 10)} sem juros
                </p>
              </div>
              <div className={styles.cardDecorador}></div>
              <div>
                <button className="botaoAcao">COMPRAR</button>
              </div>

              <div className={styles.frete}>
                <form onSubmit={handleSubmit} className={styles.frete}>
                  <label htmlFor="cep">Consulte seu Frete:</label>
                  <input
                    type="text"
                    id="cep"
                    value={form.cep || ""}
                    onChange={handleChange}
                    placeholder="XXXXX-XXX"
                  />
                  <button className={styles.botaoFrete}>Calcular</button>
                </form>
              </div>
              {frete && (
                <div className={styles.cotacaoFrete}>
                  <div>
                    <p>Frete Sedex, em ate 6 dias para o frete {form.cep}</p>
                    <p className={styles.precoFrete}>R$ {padraoFrete}</p>
                  </div>
                  <div className={styles.freteDecorador}></div>
                  <div>
                    <p>Frete Rapido, em ate 4 dias para o frete {form.cep}</p>
                    <p className={styles.precoFrete}>R$ {padraoFrete * 1.2}</p>
                  </div>
                  <div className={styles.freteDecorador}></div>
                  <div>
                    <p>
                      Frete UltraRapido, em ate 1 dia para o frete {form.cep}
                    </p>
                    <p className={styles.precoFrete}>R$ {padraoFrete * 1.5} </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <h1 className="titulo-container">Descricao do produto</h1>
          <div className={styles.descricao}> {info.DESCRICAO}</div>
          <h1 className="titulo-container">Caracteristicas do produto</h1>
          <div className={styles.descricao}>{info.DESCRICAO}</div>
          <h1 className="titulo-container">Especificacoes Tecnicas</h1>
          <div className={styles.descricao}>{info.DESCRICAO}</div>
          <h1 className="titulo-container">Dimensoes</h1>
          <div className={styles.descricao}>{info.DESCRICAO}</div>
        </>
      )}
    </div>
  );
};

export default Produto;
