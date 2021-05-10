import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
   
    function RenderDish({dish}) {
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

    function  RenderComments({comments}) {
        if (comments!= null){
           const comentario=  comments.map((comment) => {
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



    const  DishDetail = (props) => {
       
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
              
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                
            </div>
            </div>
        );
    }



export default DishDetail;