import React, {Component} from 'react';
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch,Route,Redirect,withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import Dishdetail from "./DishdetailComponent";
import About from "./AboutComponent";

const mapStateToProps = state => {
    return {
        dishes:state.dishes,
        comments:state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

class Main extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () =>{
            return(
                <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
                      promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
                      leader={this.props.leaders.filter((leader)=>leader.featured)[0]}/>
            )
        };
        const DishWithID = ({match}) => {
            return (
                <Dishdetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
                            comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}

                />


            )
        };

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/> } />
                    <Route path="/menu/:dishId" component={DishWithID} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders} /> } />
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
