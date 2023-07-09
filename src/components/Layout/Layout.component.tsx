import React, { useContext, useEffect } from "react";

//COMPONENTES
import Header from "../Header/Header.component";
import Home from "../Home/Home.component";
import Cuestionario from "../Cuestionario/Cuestionario.component";
import Footer from "../Footer/Footer.component";
//CONTEXT
import { CuestionarioContext } from "../../context/Cuestionario.context";

const Layout = () => {
  //implementacion del context
  const [estado, dispatch] = useContext(CuestionarioContext);

  return (
    <>
      <Header />
      {estado.estadoJuego === "Empezar" && <Home />}
      {estado.estadoJuego === "Jugando" && <Cuestionario />}
      {/* {estado.estadoJuego === "Finalizado" && } */}
      <Footer />
    </>
  );
};
export default Layout;
