import  BuscadorForm  from "./BuscadorForm";
import ResultadoMercado from "./ResultadoMercado";
import useMercado from "../hooks/useMercado";


export const AppMercado = () => {
    const {resultado } = useMercado()
    return (
        <>
          
            <header>
            <BuscadorForm/>
            </header>
            {/*resultado?.query && <ResultadoMercado/>*/}
            {resultado?.query && <ResultadoMercado/>}

        </>
    )
}
