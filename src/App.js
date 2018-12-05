import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Publicacion from './components/Publicacion';
import Comentario from './components/Comentario';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route
            exact path="/" component={Publicacion}
          />
          <Route
            exact path="/comentarios" component={Comentario}
          />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
