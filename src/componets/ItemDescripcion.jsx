import { useState } from 'react'
import  useMercado  from "../hooks/useMercado"
import React from 'react'
import logo_mercado from '../assets/Logo_ML.png' 
import {useParams} from 'react-router-dom'

 const ItemDescripcion =  () => {
    
   

        const { id } = useParams();
        const consultarMercado = async () => {
        const data = await fetch(`https://api.mercadolibre.com/items/${id}`)
        const detalle = await data.json()
       
        //console.log(detalle)
        }
        consultarMercado()
  


    //console.log(useParams());


/*    const consultarMercado = async datos => {
        try{
            const { id } = useParams();

            const btenerDetalle = `https://api.mercadolibre.com/items/${id}`
            //const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { datos } = await axios(btenerDetalle)
            //console.log(datos);
            return btenerDetalle
        }catch (error) {
            console.log(error)
        }
    }
    consultarMercado()*/
    //console.log(consultarMercado)


    const handleSubmit = e => {
        e.preventDefault()
/*
        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return
        }

        consultarMercado(busqueda)*/
    }
    return (
        <>
          
            <header>
            <div >
          
            <div className="row">
            <div className="col-lg-1"></div>
                <div className="col-lg-10">    
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
                                
                                    
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                        <button
                                        type="submit" 
                                        value="Consulta Clima">
                                            <i className="bi bi-search"  aria-label="GitHub"></i>
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
            </header>
            {/*resultado?.query && <ResultadoMercado/>*/}
            {/*resultado?.query && <ResultadoMercado/>*/}

        </>
    )
}

export default ItemDescripcion
