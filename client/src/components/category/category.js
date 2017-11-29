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
                console.log(this.state.categories)
            });
    }

    render() {
        return (
            <div>
                {this.state.categories.map((x) => {
                    return (
                        <CategoryCard   name={x.title} description={x.shortDescription} />                        
                        )
                })}
            </div>

    );
    }
}

export default Categories;
