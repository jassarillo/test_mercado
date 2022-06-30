import { AppMercado }  from "./componets/AppMercado";
import { MercadoProvider } from "./context/MercadoProvider"
import Crear from "./componets/Crear";
import ItemDescripcion from "./componets/ItemDescripcion";

import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";

function App() {
 

  return (
    
    <Router>
     
      <MercadoProvider>
      <Routes>
      <Route path='/' element={<AppMercado></AppMercado>}> </Route>
      </Routes>
    </MercadoProvider>

    <Routes>
    <Route path='/Crear/:id' element={<Crear></Crear>}> </Route>
    </Routes>

    <Routes>
    <Route path='/items/:id' element={<ItemDescripcion></ItemDescripcion>}> </Route>
    </Routes>

    

    </Router>




  )
}

export default App
