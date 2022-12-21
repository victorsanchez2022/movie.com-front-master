
import { Link } from "react-router-dom";
export const Successful = () => {
  return (
    <div>
      <h1>Usuario creado correctamente </h1>
      <Link to="/movies"><button>Ingresar</button></Link>
    </div>
  );
};
