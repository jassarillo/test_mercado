import useMercado from "../hooks/useMercado"
import { Link } from "react-router-dom";
import logo_mercado from '../assets/Logo_ML.png' 
import logo_envio from '../assets/ic_shipping@2x.png.png' 
import ic_shipping from '../assets/ic_shipping.jpg' 
const ResultadoMercado = () => {
    
    const { resultado } = useMercado()
    const { paging, results,   query, site_id } = resultado

    return (
        <>
           
            <div className="row row_ruta_articulo">
            <div className="col-lg-2">
            </div>
                <div className="col-lg-8">
                Resultados>blablaca>rbbbbb>bgbgbgbg
                </div>
            </div>
          
              
            {results.slice(0, 4).map((rr) =>
               
                <div className="row ">
                     <div className="col-lg-1"></div>
                    <div className="col-lg-9">  
                        <div key={rr.id}  className="tarjeta">
                            <Link style={{textDecoration: 'none'}} id="link_tarjeta" to={"/items/"+rr.id}>
                                <div  key={rr.id} className="card">
                                    <img src={rr.thumbnail} className="img_list" >

                                    </img>

                                    <div  key={rr.id} className="card-body">
                                        <span  className="card-title">
                                            ${rr.price} <img src={ic_shipping}  id="icono_envio" ></img>
                                        </span> 

                                        <p className="card-text">
                                            {rr.title}
                                        </p>
                                        <p>
                                            Completo Único!
                                        </p>
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                   
                </div>
                )}
                
            
            
            
        </>
    )
}

export default ResultadoMercado
