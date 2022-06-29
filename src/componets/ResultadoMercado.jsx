import useMercado from "../hooks/useMercado"
import { Link } from "react-router-dom";
import logo_mercado from '../assets/Logo_ML.png' 
const ResultadoMercado = () => {
    
    const { resultado } = useMercado()
    const { paging, results,   query, site_id } = resultado

    return (
        <>
           
            <div className="row">
            <div className="col-lg-1">
            </div>
                <div className="col-lg-8">
                Resultados>blablaca>rbbbbb>bgbgbgbg
                </div>
            </div>

        {results.map((rr) =>
            /*<div  key={rr.id} className="slick-initialized contenedor">
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
            </div> */   

            /*<div key={rr.id} className="card-init" >
                <img src={rr.thumbnail} className="card-img" ></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>*/
            <div className="content">
            <div className="tarjeta">
            <div  key={rr.id} className="card">
            <img src={rr.thumbnail} className="card-img-top" ></img>
            <div  key={rr.id} className="card-body">
              <h5  className="card-title">${rr.price}</h5> <img src={logo_mercado} className="nav-img" width="60" height="40"  ></img>
              <p className="card-text">
              {rr.title}
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          </div>
              )}
            
            
        </>
    )
}

export default ResultadoMercado
