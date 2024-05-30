// pages/OnSale.js
import { RollbackOutlined,  } from '@ant-design/icons';
import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { products } from '../Products';
import { Link } from 'react-router-dom';
import './Onsale.css'
const OnSale = () => {
  return (
    <div>
      <div>
      <div className='heading'  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
         <Link className='link' to="/home">Product on sale</Link>
        <Button icon= <Link to="/home">Back to Home{<RollbackOutlined />}</Link>/>
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

export default OnSale;
