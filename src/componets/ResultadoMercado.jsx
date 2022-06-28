import useMercado from "../hooks/useMercado"
import { Link } from "react-router-dom";
const ResultadoMercado = () => {
    
    const { resultado } = useMercado()
    const { paging, results,   query, site_id } = resultado

    return (
        <>
            <h2>Resultados </h2> 

        {results.map((rr) =>
            <div  key={rr.id} className="slick-initialized slick-slider">
                <div  key={rr.id} role="presentation" className="slick-list">      
                    <div key={rr.id} className="slick-track">
                        <div key={rr.id} data-index="0" className="slick-slide slick-active" tabIndex="-1" > 
                                    key={rr.title}
                                    <img key={rr.id} width="160" height="160"
                                            src={rr.thumbnail}
                                            className="ui-search-result-image__element" alt="Aprendiz De Caballero 2
                                            Una Yegua Llamada Dora * Edelvives">
                                    </img>
                        </div>
                    </div>
                </div>
            </div>    
              )}
            
            
        </>
    )
}

export default ResultadoMercado
