import React, { Component } from 'react';

class Box extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div>
                        <img src={this.props.usuario.url} width="32" height="32" alt='algo' />
                        {this.props.usuario.nickname}
                    </div>
                    <div className="card-text">
                        <h5>{this.props.text}</h5>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;