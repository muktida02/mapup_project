import React from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/actions';

const { Header: AntdHeader } = Layout;

const Header = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.collapsed);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <AntdHeader className="header">
      <div className="header-left">
        <Button className="sidebar-button" onClick={handleToggleSidebar}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <span className="header-title">MapUp</span>
      </div>
      <div className="header-right">
        <Button type="primary">Login</Button>
        <Button type="default">Logout</Button>
        <Button type="ghost">Profile</Button>
      </div>
    </AntdHeader>
  );
};

export default Header;
