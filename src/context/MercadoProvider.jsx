import { useState, createContext } from "react";
import axios from 'axios'

const MercadoContext = createContext()

const MercadoProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: ''
       
    })

    const [resultado, setResultado] = useState({})

    const datosBusqueda = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        try{
            const { ciudad} = datos         

            const urlClima = `https://api.mercadolibre.com/sites/MLA/search?q=${ciudad}`
            //const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { data: clima } = await axios(urlClima)
            //console.log(clima.results);
            setResultado(clima)

        }catch (error) {
            console.log(error)
        }
    }

    return (
        <MercadoContext.Provider 
        value={{busqueda, 
            datosBusqueda,
            consultarClima,
            resultado
        }}
        >
            {children}
        </MercadoContext.Provider>
    )
}

export {
    MercadoProvider
}

export default MercadoContext
