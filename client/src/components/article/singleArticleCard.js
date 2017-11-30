import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient'

class SingleArticleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
             singleArticle:{}
        }
    }
    
    componentDidMount() {
        let { articleId } = this.props.match.params;
         apiClient.getSingleArticle(articleId)
        .then((data)=>{
            this.setState({
                singleArticle:data.data
            })
        })
    }

    render() {
        console.log(this.state.singleArticle)
        const {singleArticle=undefined} = this.state;

        if(singleArticle){
            return (
                <div>
                    <img src={this.state.singleArticle.image}/>
                    <h1>Title:{this.state.singleArticle.title}</h1>
                    <h6>Date:{this.state.singleArticle.date}</h6>

                    <h3>Puplisher:{this.state.singleArticle.publisherName}</h3>
                    <p>Title:{this.state.singleArticle.fullContent}</p>
                

                </div>
            );
        }else{
            return (
                <div>
                    <h1>Loadding</h1>
                </div>
            );
        }
        
    }
}

export default SingleArticleCard;
