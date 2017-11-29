import React, { Component } from 'react';
import apiClient from '../../apiClient/apiClient';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class Categories extends Component {
 
    render(props) {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <div>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <Button>Button</Button>
                    </div>
                </Card>
            </div>
    );
    }
}

export default Categories;
