//this is where I render a list of categories
import React from "react";
import CategoryForm from "./CategoryForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Header, Card, Image, Button } from "semantic-ui-react";
import Category from "./Category";
import categories from "../reducers/categories";

class Categories extends React.Component {
  state = { showForm: false };

  //map over the array of categories to display them.
  categories = () => {
    return this.props.categories.map(category => (
      <Card key={categories.id}>
        <Card.Content>
          <Card.Header>{category.name}</Card.Header>
        </Card.Content>
      </Card>
    ));
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm });

  render() {
    const { showForm } = this.state;
    return (
      <Container>
        <Header as="h3">Categories</Header>
        <Button style={{ marginBottom: "30px" }} onClick={this.toggleForm}>
          {showForm ? "Hide Form" : "Show Form"}
        </Button>
        {showForm ? (
          <CategoryForm closeForm={this.toggleForm} />
        ) : (
          <Card.Group itemsPerRow={4}>{this.categories()}</Card.Group>
        )}
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return { categories: store.categories };
};
export default connect(mapStateToProps)(Categories);

//where you render the Categories, you use mapStateTopProps. this is where you use mapStateToProps. You only use mapStateToProps when you need to get something from the store as a prop. It's when you go to the store and return it as a prop to use as a component.
