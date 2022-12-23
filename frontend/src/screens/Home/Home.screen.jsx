import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product/Product.component";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productAction';
import Loader from '../../components/Loader/Loader.component'
import Message from "../../components/Message/Message.component";


function Home() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {error, loading, products} = productList
  

  useEffect(() => {
   
    dispatch(listProducts());






  }, []);


  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Home;
