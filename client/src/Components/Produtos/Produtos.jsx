import React from "react";
import Api from "../../Api";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState();

  React.useEffect(() => {
    Api.get("produtos").then((res) => {
      console.log(res.data.teste);
    });
  }, []);
  return <div>Produtos</div>;
};

export default Produtos;
