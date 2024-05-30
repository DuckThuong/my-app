import React, { useState, useEffect } from 'react';

// Khai báo kiểu dữ liệu cho sản phẩm
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const AddProductForm = () => {
  const [formData, setFormData] = useState<Product>({
    id: '',
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = sessionStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct: Product = {
      ...formData
    };
    setProducts(prevProducts => [...prevProducts, newProduct]);
    // Reset form fields
    setFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};
