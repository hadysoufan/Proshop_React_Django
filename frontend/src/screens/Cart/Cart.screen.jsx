import React, { useEffect, useParams } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
// } from 'react-bootstrap';
// import { Message } from '../components/Message.components';
// import { addToCart } from '../actions/cartActions';
// import history from '../history';

function CartScreen({ location, match }) {
  const productId = useParams(match.id);

  const qty = location.search;

  console.log('qty:', qty);

  return <div>Cart</div>;
}

export default CartScreen;
