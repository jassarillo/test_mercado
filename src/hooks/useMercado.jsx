import { useContext } from "react";
import   MercadoContext   from "../context/MercadoProvider";

const useMercado = () => {
    return useContext(MercadoContext); 
}

export default useMercado