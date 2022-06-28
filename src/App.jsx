import { AppMercado }  from "./componets/AppMercado";
import { MercadoProvider } from "./context/MercadoProvider"
import Crear from "./componets/Crear";
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
    <Route path='/Crear' element={<Crear></Crear>}> </Route>
    </Routes>
    </Router>
  )
}

export default App
