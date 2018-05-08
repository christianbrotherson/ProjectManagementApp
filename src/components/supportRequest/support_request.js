import React, { Component } from 'react';
import InfoBox from '../infoBox';

import { connect } from 'react-redux';
import * as actions from '../../actions'

class SupportRequest extends Component {

    componentDidMount() {
        this.props.fetchSupportRequests();
    }
    

    render() {
        return (
            <div >
                support request component
                <div>
                    <div>Add Request</div>
                    <div className="row">
                        <div className="col-md-3">
                            <InfoBox type="pending"/>
                            <InfoBox type="in-progress"/>
                            <InfoBox type="complete"/>
                        </div>
                        <div className="col-md-9">
                            support request content component - contains UL
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state.supportRequest }
}

export default connect(mapStateToProps, actions)(SupportRequest);