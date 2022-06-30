import { useState } from 'react'
import  useMercado  from "../hooks/useMercado"
import React from 'react'
import logo_mercado from '../assets/Logo_ML.png' 
import {useParams} from 'react-router-dom'

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
            </header><div className="row row_ruta_articulo">
            <div className="col-lg-1">
            </div>
                <div className="col-lg-8">
                Resultados>blablaca>rbbbbb>bgbgbgbg
                </div>
            </div>




            
            
          
                <div className='row'>
                <div className='col-lg-1'> </div>
                    <div className='col-lg-10'>  
                    <div className='leftDiv'>                      
                                <div   className="card im-detalle">
                                    <img src={detalle.secure_thumbnail} className="img_list"  >
                                    </img>
                                    <div   className="card-body">
                                        <div className='text-price'>
                                                <p className="card-text">
                                                    {detalle.condition}-Disponibles: {detalle.available_quantity}
                                                </p>
                                              
                                                <p className="card-text">
                                                    {detalle.title}
                                                </p>
                                                  <span >
                                                    ${detalle.price} 
                                                </span> 
                                                <p>
                                                   <input type='button' className="btn btn-primary" value="Comprar"/>
                                                </p>
                                        </div>
                                        <div className='detalle-descripcion'>
                                            <p>frfreferfre febtyb jiy mui m imuimu mum imitm ymymym ymym ymy ymym ymy mmy mymm yhyhhu j jn ibhkhggusdtfcdtyfc cfty fctyfsdtycfsctdf cstcfdt sftdcft few7e td8toqipuwe09uue9qu epup  upwqi upe qype q</p>
                                        </div>
                                    </div>
                                </div>                    
                    </div>
                    </div> 
                    {/*<div className='col-lg-1'> 
                    <div className='rightDiv'>
                                <div   className="card">
                                
                                    <div   className="card-body">
                                        <span  className="card-title">
                                            ${detalle.price} <img src=''  id="icono_envio" ></img>
                                        </span> 
                                        <p className="card-text">
                                            {detalle.title}
                                        </p>
                                        <p>
                                            Completo Único!
                                        </p>
                                        
                                    </div>
                                </div>
                
                    </div>
                    </div>*/}
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
