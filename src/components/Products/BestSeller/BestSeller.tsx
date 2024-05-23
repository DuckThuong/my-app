// pages/OutOfDate.js
import React from 'react';
import './BestSeller.css'
import { Button, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { products } from '../Products';
import { RollbackOutlined } from '@ant-design/icons';
const OutOfDate = () => {
  return (
    <div className='content'>
      <div>
      <div  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>New Product</h2>
          <Button icon= <Link to="/home">{<RollbackOutlined/>}</Link>/>
        </div>
        <Row className='row row-product-list' gutter={[16, 16]}>
        {products.map(product => (
          <Col className='col col-product-list' key={product.id}>
            <Card hoverable className='product-card' > 
            <img className='product-list-image' alt={` ${product.name}`} src={`${product.image}`} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Button type="primary">View Details</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
        </div>
    </div>
  );
};

export default OutOfDate;
