import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle ,ListGroup, ListGroupItem, Badge} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null)
            return( comments.map((comment) => {
                    return (<ul class="list-unstyled"  key={comment.id}>
                                  <li>{comment.comment}</li>
                                  <li>--{comment.author},{comment.date}</li>

                            </ul>
                    );
                })
                );
             else
                return(
                    <div></div>
                );
    }



    render() {
       
         return (
            <div className="row">
                 <div  className="col-12 col-md-5 m-1">
                         {this.renderDish(this.props.dish)} 
                         </div>   
                         <div  className="col-12 col-md-5 m-1">
                         <h4>Comments</h4>   
                         {this.renderComments(this.props.dish.comments)}
                </div> 
            </div>
            
            
        );
    }
}


export default DishDetail;