import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";


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

    function RenderComments({dish1}) {
        if(dish1!= null)
        {
            const comments = dish1.comments.map((comment) => {
                return (
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
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments}
                    </ul>
                </div>
            )

        }
        else
        {
            return (
                <div>
                </div>
            );
        }

    }
    const Dishdetail = (props)=>{
        return (
            <div className="row">
                    <RenderDish dish1={props.dish} />
                    <RenderComments dish1={props.dish} />
            </div>
        )
    }

export default Dishdetail;

