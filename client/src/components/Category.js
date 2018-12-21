//this is where I render the list of cards.
//all I need here is a bunch of links to the list of cards.
// from this component, you should be able to click on a button to edit or delete an individual card.
//A category is a link to its own cards list.
//ADD Card Form here. You need to pass category ID to the card form maybe through the route, as a link or use Redux, maybe make an action like GetSpecificId...or get all categories from Redux and in mapStateToProps filter through and find which one.

//Maybe easier to get ID through the Route. If clicking on it, get it through the Route.

//you can set up Redux action for getSpecificId. It's a way to pass a function or prop to anything.

import React from "react";
import CategoryForm from "./CategoryForm";
import categories, { deleteCategory } from "../reducers/categories";
import { connect } from "react-redux";
import { Header, Image, Container, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Category extends React.Component {
  state = { showForm: false };

  toggleForm = () => this.setState({ showForm: !this.state.showForm });

  // handleDelete = () => {
  //   const {
  //     app,
  //     dispatch,
  //     history: { push }
  //   } = this.props;
  //   dispatch(deleteCategory(category.id));
  //   push("/categories");
  // };

  render() {
    const { showForm } = this.state;
    const { category = {} } = this.props;

    return (
      <Container>
        <Link to="/categories">View All Categories</Link>
      </Container>
    );
  }
}

//this is going to grab the category ID that we need from the store. It's bringing it in because it's sent to store from the Rails backend. It was retrieved via the componentDidMount, which calls the getRequest function in the reducers file. We dispatch getCategories, which calls the function. The axios get is no longer fired simply on/through the componentDidMount as with pure React.

export default Category;
//does component need to use dispatch, meaning is it calling one of your reducers? If you need access to dispatch then you need connect. This can be added as needed if you decide dispatch is needed.

//you only need mapStateToProps if brining info in from react Store.
// example: export default connect(mapStateToProps)(Apps);
