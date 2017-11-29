import React, { Component } from 'react';
import SingleCategory from './singleCategory'
import './categoryCardStyle.css'
class CategoryBox extends Component {
    render() {
        let { categoryId } = this.props.match.params;

        return (<div id="categoryBox">
            <SingleCategory catId={categoryId} />
        </div>)
    }
}

export default CategoryBox;
