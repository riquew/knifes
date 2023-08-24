import React from "react";
import Api from "../../Api";
import Produto from "./Produto/Produto";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    function getProdutos() {
      Api.get("produtos").then((response) => setProdutos(response.data));
    }
    getProdutos();
    setLoading(false);
  }, []);

  return (
    <div className="container">
      {loading && <span>Carregando...</span>}
      {!loading && produtos && (
        <ul>
          {produtos.map((produto) => {
            return (
              <li key={produto.ID}>
                <Produto
                  id={produto.ID}
                  nome={produto.NOME}
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
