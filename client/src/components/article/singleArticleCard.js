import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient'

class SingleArticleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
             singleArticle:{},
             language:''
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
    arabicLanguage=()=>{
        this.setState({
            language:'arabic'            
         })
    }
    englishLanguage=()=>{
        this.setState({
            language:''            
         })
    }

    amarginLanguage=()=>{
        this.setState({
            language:'amargin'            
         })
    }


    render() {

        let articleContent=""
        const {singleArticle} = this.state;

        if(this.state.singleArticle.title !== undefined){
             
            if(this.state.language !==""){
                if(this.state.language==="arabic"){
                     articleContent=this.state.singleArticle.translate.arabic;
                     }else{
                         console.log(this.state.singleArticle.translate)
                        articleContent=this.state.singleArticle.translate.amagrine;
                     }
                    
                }
             else{
                console.log(this.state.singleArticle.fullContent);
                articleContent=this.state.singleArticle.fullContent;
                console.log(articleContent )
                        }
                    }
      

        if(singleArticle){
            return (
                <div>
                   <button onClick={this.englishLanguage} id="englishArticleButton" className="btn btn-info">See The Article in English</button>
                   <br/> <br/>
                   <button onClick={this.amarginLanguage} id="amargineArticleButton" className="btn btn-info">See The Article in Amargine</button>
                   <br/> <br/>
                    <button onClick={this.arabicLanguage} id="arabicArticleButton" className="btn btn-info">مشاهدة المقالة باللغة العربية</button>
                <div id="articlePage" class="container">
                    <img src={this.state.singleArticle.image}/>
                    <h1>Title:{this.state.singleArticle.title}</h1>
                    <h6>Date:{this.state.singleArticle.date}</h6>
                    <h3>Puplisher:{this.state.singleArticle.publisherName}</h3>
                    <p>{articleContent}</p>
                </div>
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
