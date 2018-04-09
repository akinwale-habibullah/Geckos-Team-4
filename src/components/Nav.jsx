import React from "react";
import "./Nav.css";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    
    onClickHandler(ev){
        ev.classList.toggle("is-active");
        document.getElementsByClassName("navbar-menu")[0].classList.toggle("is-active");
    }

    render() {
        return (
            <header>
                <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>

                        <a onClick={event => this.onClickHandler(event.target)} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">Details page</a>
                            <a class="navbar-item">Portfolio</a>
                            <a class="navbar-item">Exchange prices</a>
                        </div>

                        <div class="navbar-end">
                            <a class="navbar-item">Settings</a>
                            <a class="navbar-item">Help</a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default App;