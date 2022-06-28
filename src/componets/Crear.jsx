import  React  from "react";
class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="card">
            <div className="card-header">
                Este es el apartado de Crear
                <input type="text"></input>
            </div>
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <input type="text"></input>
                <p className="card-text">Text</p>
                <input type="text"></input>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
    }
}
 
export default Crear;
