import React, { useEffect, useState } from 'react';
import { Layout, LayoutProps, Menu, MenuProps, theme } from 'antd';
import './Layout.css'
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ProductOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  DingdingOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './../Home/Home';
import Cart from './../Cart/Cart';
import NewProduct from '../Products/NewProduct/NewProduct';
import OnSale from '../Products/Onsale/Onsale';
import BestSeller from '../Products/BestSeller/BestSeller';
import UpDate from '../Update/UpDate';
import LogOut from '../Logout/LogOut';
import Other from '../Products/Other/Other';
import Search from './../Search/Search';
import LoGin from './../Login/Login';
const { Header, Content, Footer } = Layout;

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
    ): MenuItem {
      return {
        key,
        icon,
        children,
        label,
      } as MenuItem;
    }
    const items: MenuItem[] = [
      getItem(<Link to="/home">Home</Link>, '1', <HomeOutlined  />),
      getItem('Product', '2', <ProductOutlined />, [
        getItem(<Link to="/new-product">New</Link>, '3'),
        getItem(<Link to="/on-sale">On Sale</Link>, '4'),
        getItem(<Link to="/best-seller">Best Seller</Link>, '5'),
      ]),
      getItem(<Link to="/search">Search</Link>, '6', <SearchOutlined />),
      getItem(<Link to="/cart">Cart</Link>, '7', <ShoppingCartOutlined  />),
      getItem('Account', 'sub2', <UserOutlined />, [
        getItem(<Link to="/normal-user">Cập nhật</Link>, '8'),
        getItem(<Link to="/">Thoát</Link>, '9'),
      ]),
      getItem('Other', '10', <QuestionCircleOutlined />),
    ];
      const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      const { pathname } = useLocation();
      const [selectedKey, setSelectedKey] = useState<string>('1');
      useEffect(() => {
        const pathToKeyMap: { [key: string]: string } = {
          '/home': '1',
          '/new-product': '2',
          '/on-sale': '2',
          '/best-seller': '2',
          '/search': '6',
          '/cart': '7',
          '/normal-user': 'sub2',
          '/vip-user': 'sub2',
          '/other': '10',
        };
        setSelectedKey(pathToKeyMap[pathname] || '');
      }, [pathname]);

  return (
    <div>    
    <Layout>
        <Header className='body-header' style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo-vertical">
            <span className='logo_icon'><DingdingOutlined /></span>
            <Link className='logo_link' to="/home">DuckThuong</Link>
        </div>
        <Menu
          className='menu-options'
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedKey]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
          className='body_content'
          >
              <switch>
                <Routes>
                    <Route path='/' Component = {LoGin}/>
                    <Route path="/home" Component={Home} />
                    <Route path="/cart" Component={Cart} />
                    <Route path="/new-product" Component={NewProduct} />
                    <Route path="/on-sale" Component={OnSale} />
                    <Route path="/best-seller" Component={BestSeller} />
                    <Route path="/Search" Component={Search} />
                    <Route path="/normal-user" Component={UpDate} />
                    <Route path="/vip-user" Component={LogOut} />
                    <Route path="/other" Component={Other} />
                </Routes>
              </switch>
        </div>
      </Content>
      <Footer className='layout layout-footer' style={{ textAlign: 'center' }}>
          DuckThuong Design ©{new Date().getFullYear()} Created by DuckThuong
      </Footer>
    </Layout>
    </div>
  );
};

export default AppLayout;