import React, { Component } from 'react';
import {
    Card, CardImg,
    CardTitle
} from 'reactstrap';
import './categoryCardStyle.css'
import { Link } from "react-router-dom";


class CategoryCard extends Component {

    render(props) {
        return (
            <div className="categorySingleCard container">
                <Card>
                    <CardImg top width="20" src="http://buttons.studiomarimo.com/order/button_op-zoro.png" alt="Card image cap" /> 
                    <CardTitle><Link to={this.props.id}>{this.props.title}</Link></CardTitle>
                </Card>
            </div>
        );
    }
}

export default CategoryCard;
