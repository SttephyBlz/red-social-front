import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';

class Comentario extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            postId: "",
            texto: "",
            usuario: {
                nickname: "",
                url: "",
            },
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.setState({ postId: id });
    }


    renderBoxes = () => {

        const commentsList = [
            { id:1, texto: 'Comentario 1', usuario: { nickname: 'hola', url: 'https://res.cloudinary.com/teepublic/image/private/s--SWWGIC9f--/t_Preview/b_rgb:6e2229,c_limit,f_auto,h_313,q_90,w_313/v1476632747/production/designs/737485_1' }}, 
            { id:1, texto: 'Comentario 2', usuario: { nickname: 'que', url: 'https://res.cloudinary.com/teepublic/image/private/s--SWWGIC9f--/t_Preview/b_rgb:6e2229,c_limit,f_auto,h_313,q_90,w_313/v1476632747/production/designs/737485_1' }},
            { id:2, texto: 'Comentario 3', usuario: { nickname: 'hace', url: 'https://res.cloudinary.com/teepublic/image/private/s--SWWGIC9f--/t_Preview/b_rgb:6e2229,c_limit,f_auto,h_313,q_90,w_313/v1476632747/production/designs/737485_1' }},
        ];

        const filteredComments = commentsList.filter((element) => {
            return element.id === this.state.postId*1;
        });

        const postsCardsList = filteredComments.map((comentario, key) => {
            return <Box key={key} text={comentario.texto} usuario={comentario.usuario} />
        });

        return postsCardsList;
    }

    render() {
        return (
            <div className="comentarios ml-3">
                
                <h1>Comentarios</h1>                
            
                {this.renderBoxes()}
            
                <Link to="/">Publicaciones</Link>
                
            </div>
        );
    }
}

export default Comentario;