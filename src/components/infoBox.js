import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InfoBox extends Component {

    handleSelected() {
        this.props.selectRequestType(this.props.type)
    }

    render() {
        return (
            <div className="info-box">
                <a onClick={() => this.handleSelected()}>
                    the type of this info box is {this.props.type}
                </a>
            </div>
        );
    }
}

export default connect(null, actions)(InfoBox);