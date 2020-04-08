import React, { useState, useLayoutEffect } from 'react';

import 'antd/dist/antd.css';
import './styles.css';

import { MenuOutlined } from '@ant-design/icons';

import TabComponent from '../../components/TabComponent';
import MenuComponent from './../../components/MenuComponent';
import TableComponent from './../../components/TableComponent';
import UploadComponent from './../../components/UploadComponent';

import { IMenuItem } from './../../interfaces/IMenuItem';

import avatar from "../../assets/avatar.png";
import logoFooter from '../../assets/logo-footer-bry.png';
import logoHeader from '../../assets/logo-header-bry-signer.png';

import { Layout, Button } from 'antd';

import {
  BellOutlined,
  FileTextOutlined,
  EditOutlined,
  DownOutlined,
  LayoutOutlined,
  SlidersOutlined,
  LogoutOutlined,
  CheckOutlined,
  FileSyncOutlined,
  FileProtectOutlined,
  FileExclamationOutlined,
  StopOutlined,
  ProfileOutlined
} from '@ant-design/icons';

import { ITabHeaderItem } from './../../interfaces/ITabHeaderItem';

const { Header, Content, Footer, Sider } = Layout;

export default function Documents(): any {

  const [width, setWidth] = useState(0);
  const [collapsed, setCollapsed] = useState(width < 1024);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
  }, []);

  const menuItem = new Array<IMenuItem>();
  menuItem.push({ id: 1, icon: <FileTextOutlined />, text: 'DOCUMENTOS' });
  menuItem.push({ id: 2, icon: <LayoutOutlined />, text: 'MODELOS' });
  menuItem.push({ id: 3, icon: <SlidersOutlined />, text: 'CONFIGURAÇÕES' })
  menuItem.push({ id: 4, icon: <LogoutOutlined />, text: 'SAIR' });

  const tabs = new Array<ITabHeaderItem>();
  tabs.push({ id: 1, number: '72', text: 'Documentos', icon: <CheckOutlined style={{ fontSize: 16 }} />, content: <TableComponent /> });
  tabs.push({ id: 2, number: '06', text: 'Pendentes', icon: <FileSyncOutlined style={{ fontSize: 16 }} />, content: <TableComponent /> });
  tabs.push({ id: 3, number: '32', text: 'Finalizados', icon: <FileProtectOutlined style={{ fontSize: 16 }} />, content: <TableComponent /> });
  tabs.push({ id: 4, number: '02', text: 'Rejeitados', icon: <FileExclamationOutlined style={{ fontSize: 16 }} />, content: <TableComponent /> });
  tabs.push({ id: 5, number: '30', text: 'Cancelados', icon: <StopOutlined style={{ fontSize: 16 }} />, content: <TableComponent /> });
  tabs.push({ id: 6, number: '02', text: 'Rascunhos', icon: <ProfileOutlined style={{ fontSize: 16 }} />, content: <TableComponent /> });

  return (

    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width={width <= 425 ? '100%' : '280'}
          collapsed={width <= 1024 ? collapsed : false}

          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className='sider-container'>

            <img src={avatar} alt='Avatar' />
            <span className='name-avatar'>João da Silva</span>
            <span className='afiliation-avatar'>
              Conta BRy Tecnologia
              <DownOutlined style={{ color: "#A0AFBC", fontSize: 12, paddingLeft: 5 }} />
            </span>

            <span className='button-new-signature'>
              <Button type="primary">
                <EditOutlined />
                    NOVA ASSINATURA
                  </Button>
            </span>

            <MenuComponent menuItem={menuItem} />

            <div className='logo-header-mob'>
              <img src={logoHeader} alt='Logo do BRy Signer' />
            </div>

          </div>

        </Sider>
        <Layout>
          <Header>
            <div className='header-container'>
              <div className='header-row'>
                <div className='logoHeader'>
                  <img src={logoHeader} alt='Logo do BRy Signer' />
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
            <div className='header-container-mob'>
              <MenuOutlined onClick={() => setCollapsed(!collapsed)} />
              <h1>Documentos</h1>
              <BellOutlined className='button-bell' />
            </div>
          </Header>
          <Content style={width <= 425 ? { margin: 0 } : { margin: '75px 16px 0' }}>

            <div className='content-container'>

              <div className='content-header'>
                Documentos
              </div>

              <div className='content-main'>

                <TabComponent tab={tabs} />

              </div>

            </div>

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
              <img src={logoFooter} alt='Logo da BRy Tecnologia' />
            </div>
          </Footer>
        </Layout>
      </Layout>
    </div>

  );
}