import { useState } from 'react'
import  useMercado  from "../hooks/useMercado"

const BuscadorForm = () => {

    const [alerta, setAlerta] = useState('')
    const { busqueda, datosBusqueda, consultarClima } = useMercado()

    const { ciudad, pais } = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return
        }

        consultarClima(busqueda)
    }

    return (
        <div >
            {alerta && <p>{alerta}</p>}
            <form
            onSubmit={handleSubmit}
            >
                <div className="campo">
                  
                    <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    onChange={datosBusqueda}
                    value={ciudad}
                    />
                </div>
                <input
                type="submit" 
                value="Consulta Clima"
                />
            </form>
        </div>
    );
}

export default BuscadorForm
