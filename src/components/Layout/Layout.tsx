import React from 'react';
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
import { Link, Route, Routes } from 'react-router-dom';
import Home from './../Home/Home';
import Cart from './../Cart/Cart';
import NewProduct from '../Products/NewProduct/NewProduct';
import OnSale from '../Products/Onsale/Onsale';
import OutOfDate from '../Products/OutOfDate/OutOfDate';
import UpDate from '../Update/UpDate';
import LogOut from '../Logout/LogOut';
import Other from '../Products/Other/Other';
import Search from './../Search/Search';
const { Header, Content, Footer } = Layout;


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
  getItem(<Link to="/">Home</Link>, '1', <HomeOutlined  />),
  getItem('Product', '2', <ProductOutlined />, [
    getItem(<Link to="/new-product">New</Link>, '3'),
    getItem(<Link to="/on-sale">On Sale</Link>, '4'),
    getItem(<Link to="/out-of-date">Out of Date</Link>, '5'),
  ]),
  getItem(<Link to="/search">Search</Link>, '6', <SearchOutlined />),
  getItem(<Link to="/cart">Cart</Link>, '7', <ShoppingCartOutlined  />),
  getItem('Account', 'sub2', <UserOutlined />, [
    getItem(<Link to="/normal-user">Cập nhật</Link>, '8'),
    getItem(<Link to="/log-out">Thoát</Link>, '9'),
  ]),
  getItem('Other', '10', <QuestionCircleOutlined />),
];
export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
        <Header className='body-header' style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo-vertical">
            <span className='logo_icon'><DingdingOutlined /></span>
            <Link className='logo_link' to="/">DuckThuong</Link>
        </div>
        <Menu
          className='menu-options'
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
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
                    <Route path="/" Component={Home} />
                    <Route path="/cart" Component={Cart} />
                    <Route path="/new-product" Component={NewProduct} />
                    <Route path="/on-sale" Component={OnSale} />
                    <Route path="/out-of-date" Component={OutOfDate} />
                    <Route path="/Search" Component={Search} />
                    <Route path="/normal-user" Component={UpDate} />
                    <Route path="/vip-user" Component={LogOut} />
                    <Route path="/other" Component={Other} />
                </Routes>
              </switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
          DuckThuong Design ©{new Date().getFullYear()} Created by DuckThuong
      </Footer>
    </Layout>
  );
};

export default AppLayout;