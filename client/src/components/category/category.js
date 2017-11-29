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
            <div class="categoriesContainer">
                {this.state.categories.map((x) => {
                    return (
                        <CategoryCard  id={x._id}  title={x.title} description={x.shortDescription} />                        
                        )
                })}
            </div>
    );
    }
}

export default Categories;
