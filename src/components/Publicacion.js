import React, { Component } from 'react';
import Box from './Box';

class Publicacion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postsList: [],
        };
    }

    renderBoxes = () => {

        const postsList = [{ id:1, nombre: 'Publicación 1'}, { id:2, nombre: 'Publicación 2'}, { id:3, nombre: 'Publicación 3'}];

        const postsBoxesList = postsList.map((publicacion, key) => {
            return <Box key={key} id={publicacion.id} nombre={publicacion.nombre}  />
        });

        return postsBoxesList;
    }

    render() {
        return (
            <div className="publicacion">
                <h1 className="">Publicaciones</h1>
                {this.renderBoxes()}
            </div>
        );
    }
}

export default Publicacion;