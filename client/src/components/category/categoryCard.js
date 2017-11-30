import React, { Component } from 'react';
import {
    Card, CardImg,
    CardTitle
} from 'reactstrap';
import './categoryCardStyle.css'

class CategoryCard extends Component {

    render(props) {
        return (
            <div className="categorySingleCard container">
                <Card>
                    <a ><CardImg top width="20" src="http://buttons.studiomarimo.com/order/button_op-zoro.png" alt="Card image cap" /></a>
                    <CardTitle><a href={this.props.id}>{this.props.title}</a></CardTitle>
                </Card>
            </div>
        );
    }
}

export default CategoryCard;
