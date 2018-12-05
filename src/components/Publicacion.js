import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

class Publicacion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postsList: [],
        };
    }

    renderCards = () => {

        const postsList = [{ id:1, nombre: 'Publicación 1'}, { id:2, nombre: 'Publicación 2'}, { id:3, nombre: 'Publicación 3'}];

        const postsCardsList = postsList.map((publicacion, key) => {
            return <Card key={key} id={publicacion.id} nombre={publicacion.nombre}  />
        });

        return postsCardsList;
    }

    render() {
        return (
            <div className="publicacion">
                <h1 className="">Publicaciones</h1>
                {this.renderCards()}
            </div>
        );
    }
}

export default Publicacion;