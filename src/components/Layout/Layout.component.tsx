import React, { useContext, useEffect } from "react";

//COMPONENTES
import Header from "../Header/Header.component";
import Home from "../Home/Home.component";
import Cuestionario from "../Cuestionario/Cuestionario.component";
import EndGame from "../EndGame/EndGame.component";
import Footer from "../Footer/Footer.component";
//CONTEXT
import { CuestionarioContext } from "../../context/Cuestionario.context";

const Layout = () => {
  //implementacion del context
  const [cuestionarioEstado, dispatch] = useContext(CuestionarioContext);

  useEffect(() => {
    dispatch({ type: "RANDOM_PREGUNTAS" });
  }, []);

  return (
    //Renderizacion del componente de acuerdo al estado
    <>
      <Header />
      {cuestionarioEstado.estadoJuego === "Empezar" && <Home />}
      {cuestionarioEstado.estadoJuego === "Jugando" && <Cuestionario />}
      {cuestionarioEstado.estadoJuego === "Finalizado" && <EndGame />}
      <Footer />
    </>
  );
};
export default Layout;
