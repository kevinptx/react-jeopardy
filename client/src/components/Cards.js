//this is the list of cards associated with a particular category.

import React from "react";
import CardForm from "./CardForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Header, Card, Image, Button } from "semantic-ui-react";

class Cards extends React.Component {
  state = { showForm: false };

  cards = () => {
    return this.props.cards.map(card => (
      <Card key={card.id}>
        <Card.Content>
          <Card.Header>{card.question}</Card.Header>
          <Card.Content>
            <ol>
              <li>{card.answer1}</li>
              <li>{card.answer2}</li>
              <li>{card.answer3}</li>
              <li>{card.answer4}</li>
            </ol>
          </Card.Content>
        </Card.Content>
      </Card>
    ));
  };
}
