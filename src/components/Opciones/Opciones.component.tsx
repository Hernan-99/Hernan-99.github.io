import { useContext } from "react";
import { CuestionarioContext } from "../../context/Cuestionario.context";

import "../../assets/styles/Opciones.style.css";

type OpcionesProps = {
  opcion: string;
  respuestaCorrecta: string;
  opSelec: () => void;
  seleccionada: boolean;
};
const Opcion: React.FC<OpcionesProps> = ({
  opcion,
  respuestaCorrecta,
  opSelec,
}) => {
  const [cuestionarioEstado, dispatch] = useContext(CuestionarioContext);

  const handleClick = () => {
    opSelec();

    dispatch({
      type: "CHECK_ANSWER",
      payload: {
        respuestaCorrecta: respuestaCorrecta,
        opcion: opcion,
      },
    });
  };

  return (
    <div
      className={`opcion ${
        cuestionarioEstado.respuestaSeleccionada && opcion === respuestaCorrecta
          ? "correcto"
          : ""
      } ${
        cuestionarioEstado.respuestaSeleccionada && opcion !== respuestaCorrecta
          ? "incorrecto"
          : ""
      }`}
      onClick={handleClick}
    >
      <p>{opcion}</p>
    </div>
  );
};
export default Opcion;
