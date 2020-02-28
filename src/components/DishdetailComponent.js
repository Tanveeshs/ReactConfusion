import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

function RenderDish({dish1}) {
        if (dish1 != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish1.image} alt={dish1.name}/>
                        <CardBody>
                            <CardTitle>{dish1.name}</CardTitle>
                            <CardText>{dish1.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            );
        }
    }

    function RenderComments({comments}) {
        if(comments!= null)
        {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author}&nbsp;{new Intl.DateTimeFormat('en-US',{
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                );
        }
        else
        {
            return (
                <div>Noo Comments
                </div>
            );
        }

    }

    const Dishdetail = (props)=>{
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <RenderDish dish1={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
            </div>
            </div>
        )
    };

export default Dishdetail;

