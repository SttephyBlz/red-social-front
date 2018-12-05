import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';

class Comentario extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = {
            texto: "",
            usuario: {
                nickname: "",
                url: "",
            },
        };
    }

    renderBoxes = () => {

        const commentsList = [
            { id:1, texto: 'Comentario 1', usuario: { nickname: 'hola', url: 'https://res.cloudinary.com/teepublic/image/private/s--SWWGIC9f--/t_Preview/b_rgb:6e2229,c_limit,f_auto,h_313,q_90,w_313/v1476632747/production/designs/737485_1' }}, 
            { id:1, texto: 'Comentario 2', usuario: { nickname: 'hola', url: 'https://res.cloudinary.com/teepublic/image/private/s--SWWGIC9f--/t_Preview/b_rgb:6e2229,c_limit,f_auto,h_313,q_90,w_313/v1476632747/production/designs/737485_1' }},
            { id:2, texto: 'Comentario 3', usuario: { nickname: 'hola', url: 'https://res.cloudinary.com/teepublic/image/private/s--SWWGIC9f--/t_Preview/b_rgb:6e2229,c_limit,f_auto,h_313,q_90,w_313/v1476632747/production/designs/737485_1' }},
        ];

        const filteredComments = commentsList.filter((element) => {
            return element.id === this.props.id;
        });

        const postsCardsList = filteredComments.map((comentario, key) => {
            return <Box key={key} text={comentario.text} usuario={comentario.usuario} />
        });

        return postsCardsList;
    }

    render() {
        return (
            <div className="publicacion row ">
                <h1 className="col-md-3">Comentarios</h1>

                <div>
                    {this.renderBoxes()}
                </div>
                <Link to="/">Publicaciones</Link>
            </div>
        );
    }
}

export default Comentario;