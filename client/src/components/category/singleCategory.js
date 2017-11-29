import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient';
 import SingleCategoryCard from './singleCategoryCard'
class SingleCategory extends Component {

    constructor() {
        super();
        this.state = {
            articles:[]
         }
    }

    componentDidMount() {
        let {categoryId}= this.props.match.params;
         apiClient.getSingleCategorey(categoryId)
         .then((x)=>{
              this.setState({
                articles:x.data  
             })
         })
         
    }

    render() {
        if(this.state.articles.length>0){

            return (
                this.state.articles.map((x)=>{
                    return <SingleCategoryCard  title={x.title}/>
                })
         );
        }else{
            return(
                <div>
                        <h1>There is no Article in this category</h1>
                </div>

            )
        }
       
        
    }
}

export default SingleCategory;
