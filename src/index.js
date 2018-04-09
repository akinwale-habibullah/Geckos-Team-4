import React, {Component} from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.jsx";
import "../node_modules/bulma/css/bulma.css";


class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div> 
                <Nav/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));