// Home.tsx
import React from 'react';
import { 
  Carousel,
   Row,
   Col,
   Card,
   Button,
   
} from 'antd';
import './Home.css'
import { products } from './../Products/Products';
import { SwapRightOutlined } from '@ant-design/icons';
// import Rating from '../Home/Rate/rate'
// import { Contact } from './Contact/Contact';
import { Link } from 'react-router-dom';




const Home: React.FC = () => {
  
  return (
      <div className="home-container">
        {/* Các sản phẩm mới */}
      <div className="autolist new-product">
      <div className='autolist heading'>
        <h2>New product</h2>
        <Button icon= <Link to="/new-product">{<SwapRightOutlined/>}</Link>/>
        </div>
      <Carousel 
          className='carousel carousel-new-product'
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
                <img className='product-image' alt={` ${product.name}`} src={`${product.image}`} />
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
     {/* Phần Danh sách sản phẩm đang giảm giá */}
     <div className="autolist on-sale-product" >
      <div className='autolist heading'>
        <h2>Product on sale</h2>
        <Button icon= <Link to="/on-sale">{<SwapRightOutlined/>}</Link>/>
      </div>
          <Carousel 
            className='carousel carousel-on-sale'
            dots={true} 
            draggable={true} 
            slidesToShow={3} 
            autoplay 
            autoplaySpeed={5000} 
            infinite = {true} 
            arrows 
              
            >
          {products.map(product => (
            <div key={product.id}>
              <Card hoverable className="product-card">
                <img className='product-image' alt={` ${product.name}`} src={`${product.image}`} />
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
     {/* Phần Danh sách sản phẩm đang bán chạy */}
     <div className="autolist best-seller-product" >
     <div className='autolist heading'>
        <h2>Best Seller</h2>
        <Button icon= <Link to="/best-seller">{<SwapRightOutlined/>}</Link>/>
        </div>
          <Carousel 
            className='carousel carousel-best-seller'
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
                <img className='product-image' alt={` ${product.name}`} src={`${product.image}`} />
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
        {/* Phần Danh sách sản phẩm */}
        <div>
        <div  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Product List</h2>
          <Button icon= <Link to="/best-seller">{<SwapRightOutlined/>}</Link>/>
        </div>
        <Row className='row row-product-list' gutter={[16, 16]} >
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
      
      {/* Đánh giá */}
      {/* <Rating/> */}
        {/* Phần Liên hệ */}
      {/* <Contact/> */}
      </div>
  );
}


export default Home;
