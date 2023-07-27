import React, { useState } from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Map from './components/Map';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import store from './redux/store';
import './App.css';

const { Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <Layout style={{ minHeight: '100vh' }}>
          <Header />
          <Layout>
            {!collapsed && <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />}
            <Layout>
              <Content>
                <div className="main-content">
                  <Map />
                  <div className="content-wrapper">
                    <FormInput />
                    <RegionInfo />
                  </div>
                </div>
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Provider>
  );
};

export default App;
