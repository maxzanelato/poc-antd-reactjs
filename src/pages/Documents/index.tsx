import React from 'react';

import 'antd/dist/antd.css';
import './styles.css';

import MenuComponent from './../../components/MenuComponent';
import UploadComponent from './../../components/UploadComponent';

import { IMenuItem } from './../../interfaces/IMenuItem';

import Avatar from "../../assets/avatar.png";
import LogoFooter from '../../assets/logo-footer-bry.png';
import LogoHeader from '../../assets/logo-header-bry-signer.png';

import { Layout, Button } from 'antd';

import { BellOutlined, FileTextOutlined, EditOutlined, DownOutlined, LayoutOutlined, SlidersOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default function Documents(): any {
  const x = new Array<IMenuItem>();
  x.push({ id: 1, icon: <FileTextOutlined />, text: 'DOCUMENTOS' });
  x.push({ id: 2, icon: <LayoutOutlined />, text: 'MODELOS' });
  x.push({ id: 3, icon: <SlidersOutlined />, text: 'CONFIGURAÇÕES' })
  x.push({ id: 4, icon: <LogoutOutlined />, text: 'SAIR' });

  return (

    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width='280'

          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className='sider-container'>

            <img src={Avatar} alt='Avatar' />
            <span className='name-avatar'>João da Silva</span>
            <span className='afiliation-avatar'>
              Conta BRy Tecnologia
              <DownOutlined style={{ color: "#A0AFBC", fontSize: 12, paddingLeft: 5 }} />
            </span>

            <MenuComponent menuItem={x} />

          </div>

        </Sider>
        <Layout>
          <Header>
            <div className='header-container'>
              <div className='header-row'>
                <div>
                  <img src={LogoHeader} alt='Logo do BRy Signer' />
                </div>

                <div>
                  <Button type="primary">
                    <EditOutlined />
                    NOVA ASSINATURA
                  </Button>
                  <Button type="link">
                    <BellOutlined />
                  </Button>
                </div>
              </div>
              <div className='header-row'>
                <UploadComponent />
              </div>
            </div>
          </Header>
          <Content style={{ margin: '100px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', height: '100%' }}>content</div>
          </Content>
          <Footer className='footer'>
            <div className='menus'>
              <div className="menu">
                Termos de uso
              </div>
              <div className="menu">
                Suporte
              </div>
            </div>
            <div className='logo'>
              <img src={LogoFooter} alt='Logo da BRy Tecnologia' />
            </div>
          </Footer>
        </Layout>
      </Layout>
    </div>

  );
}