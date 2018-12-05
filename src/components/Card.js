import React, { Component } from 'react';
import './card.css'
import { Link } from 'react-router-dom';

class Card extends Component {

    render() {
        return (
            <div className="list-group">
                <a href className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.props.nombre}</h5>
                    </div>

                    <small><Link to={{
                        pathname: `/comentarios/${this.props.id}`,
                        state: { id: this.props.id}
                    }}>Comentarios</Link></small>
                </a>
            </div>
        );
    }
}
export default Card;
