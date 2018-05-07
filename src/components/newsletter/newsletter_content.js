import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsletterContent extends Component {

    renderItem() {
        if (this.props.latestItem) {
            return (
                <div>
                    <div>
                        <img src={this.props.latestItem.imageUrl}/>
                        <h2>{this.props.latestItem.title}</h2>
                    </div>
                    <p>
                        {this.props.latestItem.body}
                    </p>
                    <Link to={`/newsletter/edit/${this.props.latestItem._id}`}>
                        <div>Edit Newsletter</div>
                    </Link>
                    <Link to={`/newsletter/add`}>
                        <div>Add Newsletter</div>
                    </Link>
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}

export default NewsletterContent;