import React, { Component } from 'react';

class SingleCategoryCard extends Component {

    render(props) {
        return (
            <div className="single-category">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default SingleCategoryCard;
