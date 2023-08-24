import React from "react";
import Api from "../../Api";
import Produto from "./Produto/Produto";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState();
  const [loading, setLoading] = React.useState();

  React.useEffect(() => {
    setLoading(true);
    function getProdutos() {
      Api.get("produtos").then((response) => setProdutos(response.data));
      setLoading(false);
    }
    getProdutos();
  }, []);

  return (
    <div className="container">
      {loading && <span>Carregando...</span>}
      {!loading && produtos && (
        <ul>
          {produtos.map((produto) => {
            return (
              <li key={produto.PRODUTOID}>
                <Produto
                  id={produto.PRODUTOID}
                  nome={produto.NOMEPRODUTO}
                  imagem={produto.IMAGEM}
                  quantidade={produto.QUANTIDADE}
                  preco={produto.PRECO}
                  descricao={produto.DESCRICAO}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Produtos;
