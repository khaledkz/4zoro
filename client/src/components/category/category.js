import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient'
import categoryCard from './categoryCard'
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
                        <categoryCard   name={x.title} description={x.shortDescription} />                        
                        )
                })}
            </div>

    );
    }
}

export default Categories;
