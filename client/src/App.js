import React, { Fragment } from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import FetchCategories from "./components/FetchCategories";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import { FragmentContainer } from "./styles/AppStyle.js";
const App = () => (
  <FragmentContainer>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={FetchCategories} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FragmentContainer>
);

export default App;
