import { useState } from 'react'
import  useMercado  from "../hooks/useMercado"
import logo_mercado from '../assets/Logo_ML.png' 

const BuscadorForm = () => {

    const [alerta, setAlerta] = useState('')
    const { busqueda, datosBusqueda, consultarMercado } = useMercado()

    const { ciudad } = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return
        }

        consultarMercado(busqueda)
    }

    return (
        <div >
           
            <div className="row">
            <div className="col-lg-2"></div>
                <div className="col-lg-8">    
                    <form onSubmit={handleSubmit} >
                            <div className="row">
                            <div className="col-lg-1">
                            <img src={logo_mercado} className="nav-img" width="60" height="40"  ></img>
                            </div>
                            <div className="col-lg-11">
                                <div className="input-group">
                                    <input className="form-control"
                                    type="text"
                                    id="ciudad"
                                    name="ciudad"
                                    placeholder="Nunca dejes de buscar"
                                    onChange={datosBusqueda}
                                    value={ciudad}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                        <button
                                        type="submit" 
                                        value="Consulta Clima">
                                            <i className="bi bi-search"  aria-label="mercado"></i>
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            
                            </div>
                            </div>
                    </form>

                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
}

export default BuscadorForm
