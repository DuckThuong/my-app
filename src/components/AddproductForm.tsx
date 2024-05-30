import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
import { products } from './Products/Products';
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

// Định nghĩa kiểu Product
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}
export const FormDisabledDemo: React.FC = () => {
  const [form] = Form.useForm();
  const [product, setProducts] = useState<Product[]>(products);
  useEffect(() => {
    const savedProducts = sessionStorage.getItem('products');
      if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);
  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        const newProduct: Product = {
          id: values.id,
          name: values.name,
          description: values.description,
          price: values.price,
          image: values.fileList ? values.fileList[0].url : ''
        };
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        sessionStorage.setItem('products', JSON.stringify(updatedProducts));
        console.log('Saved data:', updatedProducts);
      })
      .catch(errorInfo => {
        console.log('Failed:', errorInfo);
      });
      console.log(products);
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Id Product"
          name="id"
          rules={[{ required: true, message: 'Please input the ID!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name Product"
          name="name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input the price!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Upload"
          name="fileList"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <Button type="primary" htmlType="submit">Upload</Button>
        </Form.Item>
      </Form>
    </>
  );
};
