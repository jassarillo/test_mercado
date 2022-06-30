import { useState } from 'react'
import  useMercado  from "../hooks/useMercado"
import React from 'react'
import logo_mercado from '../assets/Logo_ML.png' 
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";

 const ItemDescripcion =  () => {
    
    const { id } = useParams();
        
    const [detalle, setDetalle ] = React.useState([])

    React.useEffect(()=>{
        consultarMercado()
    },[])

    
    const consultarMercado = async () => {
    const data = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const detalle = await data.json()
        setDetalle(detalle)
    }
    //consultarMercado()
    const mercado = consultarMercado()
    
    // const  detalleItem =  consultarMercado()
    // console.log(detalleItem.Promise);

    const handleSubmit = e => {
        e.preventDefault()

    }
    return (
        <>
          
            <header>
            <div >
          
            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-8">    
                        <form onSubmit={handleSubmit} >
                                <div className="row">
                                <div className="col-lg-1">
                                <Link  to={"/"}>
                                <img src={logo_mercado} className="nav-img" width="60" height="40"  ></img>
                                </Link>
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
            </header><div className="row row_ruta_articulo">
            <div className="col-lg-2">
            </div>
                <div className="col-lg-8">
                {detalle.domain_id}>{detalle.listing_type_id}>{detalle.condition}
                </div>
            </div>
    



            
            
          
                <div className='row'>
                <div className='col-lg-2'> </div>
                    <div className='col-lg-8'>  
                    <div className='leftDiv'>                      
                                <div   className="card im-detalle">
                                    <div   className="card-body">
                                    <div className='img-detalle'>
                                    <img src={detalle.secure_thumbnail} className="img_list"  >
                                    </img>
                                    </div>
                                        <div className='text-price'>
                                                <p >
                                                    {detalle.condition}-Disponibles: {detalle.available_quantity}
                                                </p>
                                                <div className='row'>
                                                <p className="card-text">
                                                    {detalle.title}
                                                </p>
                                                </div>
                                                  <p className="card-text-price">
                                                    ${detalle.price} 
                                                </p> 
                                                <p>
                                                   <input type='button' className="btn btn-primary" value="Comprar"/>
                                                </p>
                                        </div>
                                        <div className='detalle-descripcion'>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <p></p>
                                            <h2>Descripción del producto</h2>
                                            <div className='row'>
                                                <div className='col-lg-9'>
                                                    <p className='text-grey'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                              galley of type and scrambled it to make a type specimen book. It has survived not only 
                                              five centuries, but also the leap into electronic typesetting, remaining essentially
                                               unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                                                PageMaker including versions of Lorem Ipsum.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    
                    </div>
                    </div> 
                    
                    <div className='col-lg-1'></div>
                </div>
     


     
                {/*<div ClassName="row">
                    <div ClassName="col-lg-2">
                    <img src="https://http2.mlstatic.com/eshops-logo/263034421vb5a190.png" ClassName="img_list" ></img>
                    </div>
                    <div ClassName="col-lg-2">.col-lg-6</div>
                    <div ClassName="col-lg-2">.col-lg-6</div> 
                </div>*/}
           
          

        </>
    )
}

export default ItemDescripcion
