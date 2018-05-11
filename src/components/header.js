import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="main-header">
                    <h1>Welcome To The HOA Manager!</h1>
                    <p>Please login to continue</p>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Header;
