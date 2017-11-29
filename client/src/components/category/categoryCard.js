import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './categoryCardStyle.css' 
    
class CategoryCard extends Component {
 
    render(props) {
        return (
            <div className="categorySingleCard container">
                <Card>
                    <CardImg top width="20" src="http://buttons.studiomarimo.com/order/button_op-zoro.png" alt="Card image cap" />
                         <CardTitle>{this.props.title}</CardTitle>
                         <CardText>{this.props.description}</CardText>
                        <Button>Button</Button>
                 </Card>
            </div>
    );
    }
}

export default CategoryCard;
