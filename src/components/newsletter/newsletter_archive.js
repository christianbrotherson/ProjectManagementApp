import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NewsletterArchive extends Component {

    constructor(props) {
        super(props)

        this.items = []
    }

    renderNewsletterArchiveItem(item, index) {
        return (
            <li key={index} className="archive-item">
                <div className="archive-item-title">
                    <Link to={`/newsletter/detail/${item._id}`}>{item.title}</Link>
                </div>
                <div className="archive-item-date">{item.date}</div>
            </li>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.archive) {
            nextProps.archive.map((item, index) => {
                this.items.push(this.renderNewsletterArchiveItem(item, index))
            })
        }
    }

    render() {

        return (
            <div className="newsletter-archive">
                <div className="archive-title">Archive</div>
                <ul>
                    {
                        this.items
                    }
                </ul>
            </div>
        )
    }
}

export default NewsletterArchive;