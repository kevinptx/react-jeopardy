//Higher Order Component (HOC) so when you refresh the store isn't cleared.

import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";
import { getCategories } from "../reducers/categories";
import { Loader, Segment, Dimmer } from "semantic-ui-react";

class FetchCategories extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    //the dispatch triggers the action via the link to the reducer.
    this.props.dispatch(getCategories(this.setLoaded));
  }

  setLoaded = () => this.setState({ loaded: true });

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:id" component={Category} />
        </div>
      );
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

export default connect()(FetchCategories);
