import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient'
import CategoryCard from './categoryCard'

class Categories extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        apiClient.getCategories()
            .then(({ data }) => {
                this.setState({
                    categories: data
                })
            });
    }

    render() {
        return (
            <div className="categoriesContainer">
                {this.state.categories.map((x,i) => {
                    return (
                        <CategoryCard key={i} id={`/category/${x._id}`} title={x.title} description={x.shortDescription} />
                    )
                })}
            </div>
        );
    }
}

export default Categories;
