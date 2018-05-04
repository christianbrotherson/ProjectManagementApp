import React, { Component } from 'react';


class NewsletterArchive extends Component {

    constructor(props) {
        super(props)

        this.items = []
    }

    renderNewsletterArchiveItem(item, index) {
        return (
            <li key={index}>
                {item.title}
                <p>{item.date}</p>
            </li>
        )
    }

    renderNewsletterArchiveList = function() {


        if (this.props.archive) {
            this.props.archive.map((item, index) => {
                this.items.push(this.renderNewsletterArchiveItem(item, index))
            })
        }


    }

    render() {
        this.renderNewsletterArchiveList()
        
        return (
            <div>
                <div>Archive</div>
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