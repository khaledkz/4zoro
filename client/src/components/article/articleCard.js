import React from 'react';
import { Button
} from 'reactstrap';
import './articleCard.css'
const ArticleCard = (props) => {
    return (

    
         <div  class="articleBox ">
                <div class="articleBox-left ">
                <h2>Writer:</h2>
                <img src={props.image} alt="Card-cap" />
                <h3>{props.user}</h3>
                <h3>{props.date}</h3>
                </div>

                <div class="articleBox-right ">
                <h2>Article:</h2>
                <img src={props.img} alt="Card-cap" />
                <h1>{props.title}</h1>
                <h3>{props.publisherName}</h3>
                <h4>{props.articleType}</h4>
                <a href={props.id}><Button>View Article</Button></a>
                </div>
         </div>  
     );
};

export default ArticleCard;