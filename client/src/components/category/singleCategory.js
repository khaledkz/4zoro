import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient';
import ArticleCard from '../article/articleCard'

class SingleCategory extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
             user:"",
             userimage:""
        }
    }

    componentDidMount() {
        let categoryId = this.props.catId;
        apiClient.getSingleCategorey(categoryId)
            .then((x) => {
                this.setState({
                    articles: x.data
                })
            })

            apiClient.getUsers()
            .then((data)=>{
                this.setState({
                    user:data.data[0].username,
                    userimage:data.data[0].image
                })
            })
    }
  

    render() {
        
    console.log(this.state.user)
        
        if (this.state.articles.length > 0) {

            return (
                this.state.articles.map((x, i) => {
                    return <ArticleCard user={this.state.username} image={this.state.userimage} key={i} img={x.image} date={x.date} id={`/article/${x._id}`} publisherName={x.publisherName} title={x.title} />
                })
            );
        } else {
            return (
                <div>
                    <h1>There is no Article in this category</h1>
                </div>
            )
        }
    }
}

export default SingleCategory;
