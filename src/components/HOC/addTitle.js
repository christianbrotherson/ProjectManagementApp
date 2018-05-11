import React, { Component } from 'react';

const addTitle = (Child, title) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <div>
                        <div className="add-title-text">
                            {title}
                        </div>
                    </div>
                    <Child />
                </div>
            )
        }
    }
}

export default addTitle;