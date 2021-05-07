import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle ,ListGroup, ListGroupItem, Badge} from 'reactstrap';
    import { Media } from 'reactstrap';
class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null){
            return(
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );}
        else{
            return(
                <div></div>
            );}
    }

    renderComments(dish) {
        if (dish!= null){
           const comentario=  dish.comments.map((comment) => {
                    return (<ul class="list-unstyled"  key={comment.id}>
                                  <li>{comment.comment}</li>
                                  <li>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>

                            </ul>
                    );
                })
            return( 
                <div  className="col-12 col-md-5 m-1"> 
                    <Media heading>
                    {"Comments"}
                    </Media>
                   {comentario}
                   </div>
                )
                
                }
        else{
            return(
                 <div></div>
                  );}
    }



    render() {
       
         return (

            <div class="container">
            <div className="row">
                
                 {this.renderDish(this.props.dish)} 
                 {this.renderComments(this.props.dish)}  
               
                </div> 
            </div>
            
            
        );
    }
}


export default DishDetail;