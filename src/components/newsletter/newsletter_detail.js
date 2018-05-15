import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

class NewsletterDetail extends Component {

    componentDidMount() {        
        this.props.fetchNewsletterById(this.props.match.params._id)
    }

    renderFetchedItem() {
        if (this.props.fetchedItem) {
            return (
                <div className="newsletter-content">
                    <div className="image-container">
                        <img src={this.props.fetchedItem.imageUrl} />
                        <h2>{this.props.fetchedItem.title}</h2>
                    </div>
                    <p>
                        {this.props.fetchedItem.body}
                    </p>
                </div>
            )
        }
    }

    render() {

        return (
            <div className="newsletter-detail">
                <div className="info-box">
                    <div className="info-box-text">
                        02
                        </div>
                    <div className="info-box-subtext">
                        JAN 2018
                        </div>
                </div>
                <div>
                    {this.renderFetchedItem()}
                    <Link to={`/newsletter/edit/${this.props.fetchedItem._id}`}>
                        <div>Edit Newsletter</div>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {        
    return {
        fetchedItem: state.newsletter.fetchedItem
    }
}

NewsletterDetail = addTitle(NewsletterDetail, "Newsletter Archive");
NewsletterDetail = addHeaderBorder(NewsletterDetail);

export default connect(mapStateToProps, actions)(NewsletterDetail);