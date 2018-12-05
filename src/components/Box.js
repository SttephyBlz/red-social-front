import React, { Component } from 'react';

class Box extends Component {

    render() {
        return (
            <div>
                <p>{this.props.texto}</p>

                <p>{this.props.usuario.nickname}</p>
                <img src={this.props.usuario.url} width="32" height="32" alt='algo'/>
            </div>
        );
    }
}

export default Box;