//this is where I take in the data to create a category
import React from "react";
import { connect } from "react-redux";
import { addCategory, updateCategory } from "../reducers/categories";
import { Form, Dropdown } from "semantic-ui-react";

class CategoryForm extends React.Component {
  initialState = {
    name: ""
  };

  state = { ...this.initialState };

  componentDidMount() {
    if (this.props.id) this.setState({ ...this.props });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const category = { ...this.state };
    const { dispatch, closeForm } = this.props;
    const func = this.props.id ? updateCategory : addCategory;
    dispatch(func(category));
    closeForm();
  };
  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    );
  }
}

export default connect()(CategoryForm);
