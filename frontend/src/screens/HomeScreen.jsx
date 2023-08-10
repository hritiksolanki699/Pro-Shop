import React, { Fragment, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <Fragment>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
