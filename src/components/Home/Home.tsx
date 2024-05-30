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
import '../../components/Css/componet.css'



const Home: React.FC = () => {
  
  return (
      <div className="home-container">
        {/* Các sản phẩm mới */}
      <div className="autolist list-product">
      <div className='autolist heading'>
        <Link className='link' to="/new-product">New Product</Link>
        <Button icon= <Link to="/new-product">View Details{<SwapRightOutlined/>}</Link>/>
        </div>
      <Carousel 
           className='carousel carousel-new-product'
            dots={true} 
            draggable={true} 
            slidesToShow={3} 
            autoplay 
            autoplaySpeed={5000} 
            infinite = {true} 
            arrows >
          {products.map(product => (
            <div key={product.id}>
              <Card hoverable className="product-card">
                <img className='product-image' alt={` ${product.name}`} src={`${product.image}`} />
                <div>
                  <h3> {product.name}</h3>
                  <p>{product.description}</p>
                  <Link to={`/home/${product.id}`}><Button type="primary">View Details</Button></Link>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
    </div>
     {/* Phần Danh sách sản phẩm đang giảm giá */}
     <div className="autolist list-product">
      <div className='autolist heading'>
        <Link className='link' to="/on-sale">Product on sale</Link>
        <Button icon= <Link to="/on-sale">View Details{<SwapRightOutlined/>}</Link>/>
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
                  <Link to={`/home/${product.id}`}><Button type="primary">View Details</Button></Link>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
        </div>
     {/* Phần Danh sách sản phẩm đang bán chạy */}
     <div className="autolist list-product">
       <div className='autolist heading'>
        <Link className='link' to="/best-seller">Best Seller</Link>
        <Button icon= <Link to="/best-seller">View Details{<SwapRightOutlined/>}</Link>/>
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
                  <Link to={`/home/${product.id}`}><Button type="primary">View Details</Button></Link>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
        </div>
        {/* Phần Danh sách sản phẩm */}
        <div>
        <div  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link className='link' to="/all-product">Product List</Link>
            <Button className='product-list-button' icon= <Link to="/all-product">View Details{<SwapRightOutlined/>}</Link>/>
        </div>
        <Row className='row row-product-list' gutter={[16, 16]} >
            {products.map(product => (
              <Col>
              <div key={product.id}>
                <Card hoverable className="product-card">
                <img className='product-image' alt={` ${product.name}`} src={`${product.image}`} />
                <div>
                  <h3> {product.name}</h3>
                  <p>{product.description}</p>
                  <Link to={`/home/${product.id}`}><Button type="primary">View Details</Button></Link>
                </div>
              </Card>
            </div>
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
