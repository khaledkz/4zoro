import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient'

class SingleArticleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            singleArticle: {},
            language:"",
            displayArabicButton: "none",
            displayEnglishButton: "",
            displayAmargineButton: "none"
        }
    }

    componentDidMount() {
        let { articleId } = this.props.match.params;
        apiClient.getSingleArticle(articleId)
            .then((data) => {
                 if (data.data.translate.arabic) {
                    this.setState({
                        displayArabicButton: ""
                    })
                }

                if (data.data.translate.amagrine) {
                    this.setState({
                        displayAmargineButton: ""
                    })
                }
                this.setState({
                    singleArticle: data.data
                })
            })

            apiClient.getUsers()
            .then((data)=>{
                console.log("Users")
            })
    }
    arabicLanguage = () => {
        this.setState({
            language: 'arabic'
        })
    }
    englishLanguage = () => {
        this.setState({
            language: ''
        })
    }

    amarginLanguage = () => {
        this.setState({
            language: 'amagrine'
        })
    }


    render() {

        let articleContent = ""
        const { singleArticle } = this.state;

        if (this.state.singleArticle.title !== undefined) {

            if (this.state.language !== "") {
                if (this.state.language === "arabic") {
                    articleContent = this.state.singleArticle.translate.arabic;
                } else if (this.state.language === "amagrine") {
                    articleContent = this.state.singleArticle.translate.amagrine;
                }
            }
            else {
                articleContent = this.state.singleArticle.fullContent;
            }


        }

        if (singleArticle) {

            return (
                <div>

<button style={{display:this.state.displayEnglishButton}} onClick={this.englishLanguage} id="" className="btn btn-info">See The Article in English</button>
<br /> <br />
<button style={{display:this.state.displayAmargineButton}} onClick={this.amarginLanguage} id="" className="btn btn-info">See The Article in Amargine</button>
<br /> <br />
<button style={{display:this.state.displayArabicButton}} onClick={this.arabicLanguage} id="" className="btn btn-info">مشاهدة المقالة باللغة العربية</button>
<div id="articlePage" className="container">
    <img src={this.state.singleArticle.image} />
    <h1>Title:{this.state.singleArticle.title}</h1>
    <h6>Date:{this.state.singleArticle.date}</h6>
    <h3>Puplisher:{this.state.singleArticle.publisherName}</h3>
    <p>{articleContent}</p>
</div>

                </div>
            );
        } else {
            return (
                <div>
                    <h1>Loadding</h1>
                </div>
            );
        }

    }
}

export default SingleArticleCard;
