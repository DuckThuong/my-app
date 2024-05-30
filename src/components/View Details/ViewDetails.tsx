import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input } from 'antd';
import { products } from '../Products/Products';
import { Image } from 'antd';
import './ViewDetail.css';

export const ViewDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div >
      <div className="view-topbar"></div>
      <div className='view-content'>
      <div className="view-image">
        <Image.PreviewGroup>
            <Image src={product.image} alt={product.name} />
          </Image.PreviewGroup>
      </div>
      <div className="view-information">
        <Form
          layout="vertical"
          initialValues={{
            name: product.name,
            price: product.price.toLocaleString(),
            description: product.description,
          }}
        >
          <Form.Item label="Tên sản phẩm" name="name">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Giá" name="price">
            <Input readOnly addonAfter="VND" />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input.TextArea readOnly rows={4} />
          </Form.Item>
        </Form>
      </div>
      </div>
    </div>
  );
};
