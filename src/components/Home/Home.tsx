// Home.tsx
import React from 'react';
import { Carousel, Divider } from 'antd';
import { Row } from 'antd';
import { Col } from 'antd';
import { Card } from 'antd';
import { Button } from 'antd/es/radio';
import './Home.css'
import { products } from './../Products/Products';
import Rating from '../Home/Rate/rate'
const Home: React.FC = () => {
 
  return (
      <div className="home-container">
        {/* Các sản phẩm bán chạy */}
      <div className="best-selling-products">
      <h2>Các sản phẩm bán chạy</h2>
      <Carousel 
          className='carousel-best-seller'
          dots={true} 
          draggable={true} 
          slidesToShow={3} 
          autoplay 
          autoplaySpeed={5000} 
          infinite = {true} 
          arrows = {true}>
          {products.map(product => (
            <div key={product.id}>
              <Card hoverable className="product-card">
                <img className='product-image' alt={`Product ${product.name}`} src={`${product.image}`} />
                <div>
                  <h3> {product.name}</h3>
                  <p>{product.description}</p>
                  <Button type="primary">View Details</Button>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
    </div>
     {/* Phần Danh sách sản phẩm nổi bật */}
     <section className="featured-products" >
          {/* <Divider orientation="left"><h2>Các sản phẩm nổi bật</h2></Divider> */}
          <h2>Các sản phẩm nổi bật</h2>
          <Carousel 
            className='carousel-best-seller'
            dots={true} 
            draggable={true} 
            slidesToShow={3} 
            autoplay 
            autoplaySpeed={5000} 
            infinite = {true} 
            arrows = {true}
            >
          {products.map(product => (
            <div key={product.id}>
              <Card hoverable className="product-card">
                <img className='product-image' alt={`Product ${product.name}`} src={`${product.image}`} />
                <div>
                  <h3> {product.name}</h3>
                  <p>{product.description}</p>
                  <Button type="primary">View Details</Button>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
        <h2>Danh sách sản phẩm</h2>
        <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col  key={product.id} xs={24} sm={12} lg={8}>
            <Card className='product-card' hoverable> 
            <img className='product-image' alt={`Product ${product.name}`} src={`${product.image}`} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Button type="primary">View Details</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      </section>
      {/* Đánh giá */}
      <Rating/>
        {/* Phần Liên hệ */}
        <section className="contact-us">
          <Divider orientation="left"><h2>Contact Us</h2></Divider>
          <p className="contact-text">
            If you have any questions or inquiries, feel free to contact us at example@example.com.
          </p>
        </section>
      </div>
  );
}


export default Home;
