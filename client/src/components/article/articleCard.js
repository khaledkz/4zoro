import React from 'react';
import {
    Card, CardImg,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './articleCard.css'
const ArticleCard = (props) => {
    return (

        <Card id="articleCard">
            <CardImg top width="30%" src={props.img} alt="Card image cap" />
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.publisherName}</CardSubtitle>
            <CardSubtitle>{props.articleType}</CardSubtitle>
            <a href={props.id}><Button>View Article</Button></a>

        </Card>

    );
};

export default ArticleCard;