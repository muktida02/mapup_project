import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Switch } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { toggleNightMode, toggleSidebar } from '../redux/actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.collapsed);
  const nightMode = useSelector((state) => state.nightMode);

  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {!collapsed && (
        <>
          <div className="sidebar-toggle-btn">
            <button onClick={handleToggleSidebar}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
          </div>
          <Menu theme={nightMode ? 'dark' : 'light'} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              Option 1
            </Menu.Item>
            {/* Add more menu items here */}
          </Menu>
          <div className="night-mode-toggle">
            <span>Night Mode</span>
            <Switch checked={nightMode} onChange={handleNightModeToggle} />
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
