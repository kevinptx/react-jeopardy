import axios from "axios";

const CARDS = "CARDS";
const ADD_CARD = "ADD_CARD";
const UPDATE_CARD = "UPDATE_CARD";
const DELETE_CARD = "DELETE_CARD";

// REDUX ACTIONS

export const getCards = () => {
  return dispatch => {
    axios
      .get("/api/cards")
      .then(res => dispatch({ type: CARDS, cards: res.data }));
  };
};

export const addcard = card => {
  return dispatch => {
    axios
      .post("/api/cards", { card })
      .then(res => dispatch({ type: ADD_CARD, card: res.data }));
  };
};

export const updatecard = card => {
  return dispatch => {
    axios
      .put(`/api/cards/${card.id}`, { card })
      .then(res => dispatch({ type: UPDATE_CARD, card: res.data }));
  };
};

export const deletecard = id => {
  return dispatch => {
    axios
      .delete(`/api/cards/${id}`)
      .then(() => dispatch({ type: DELETE_CARD, id }));
  };
};

// REDUX REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case CARDS:
      return action.cards;
    case ADD_CARD:
      return [action.card, ...state];
    case UPDATE_CARD:
      return state.map(c => {
        if (c.id === action.card.id) return action.card;
        return c;
      });
    case DELETE_CARD:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};
