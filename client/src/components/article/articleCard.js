import React from 'react';
import {
    Card, CardImg,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './articleCard.css'
const ArticleCard = (props) => {
    return (

    
         <div  class="articleBox ">
                <div class="articleBox-left ">
                <h2>Writer:</h2>
                <img src={props.img} alt="Card image cap" />
                <h3>{props.publisherName}</h3>
                <h3>{props.date}</h3>
                </div>

                <div class="articleBox-right ">
                <h2>Article:</h2>
                <img src={props.img} alt="Card image cap" />
                <h1>{props.title}</h1>
                <h3>{props.publisherName}</h3>
                <h4>{props.articleType}</h4>
                <a href={props.id}><Button>View Article</Button></a>
                </div>
         </div>  
     );
};

export default ArticleCard;