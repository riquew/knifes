import React from "react";
import Api from "../../Api";
import { useParams } from "react-router-dom";

const Produto = () => {
  const id = useParams();
  const [loading, setLoading] = React.useState(true);
  const [info, setInfo] = React.useState();

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
    <>
      <div className="container">
        {console.log(loading)}
        {loading && <span>Carregando...</span>}
        {!loading && info && <h1 className="titulo-container">{info.NOME}</h1>}
      </div>
    </>
  );
};

export default Produto;
