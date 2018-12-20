import React from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const Home = () => (
  <Header as="h3" textAlign="center">
    Welcome <Link to="/categories">React Jeopardy</Link>
  </Header>
);

export default Home;
