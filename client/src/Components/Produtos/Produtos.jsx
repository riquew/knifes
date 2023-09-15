import React from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";
import ProdutoCard from "./ProdutoCard/ProdutoCard";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    function getProdutos() {
      Api.get("produtos").then((response) => setProdutos(response.data));
      setLoading(false);
    }
    getProdutos();
  }, []);

  console.log(loading);

  return (
    <div className="container ">
      <h1 className="titulo-container">Nossos Produtos</h1>
      {loading && <div className={styles.faltaEstoque}>Carregando...</div>}
      {!loading && produtos && produtos.length === 0 && (
        <div className={styles.faltaEstoque}>Nenhum produto incluido </div>
      )}
      {!loading && produtos && (
        <ul className={styles.produtos}>
          {produtos.map((produto) => {
            return (
              <li
                key={produto.ID}
                onClick={() => navigate(`/produtos/${produto.ID}`)}
              >
                <a href="">
                  <ProdutoCard
                    id={produto.ID}
                    nome={produto.NOME}
                    imagem={produto.IMAGEM}
                    quantidade={produto.QUANTIDADE}
                    preco={produto.PRECO}
                    descricao={produto.DESCRICAO}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Produtos;
