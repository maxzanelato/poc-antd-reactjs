import React from 'react';

import 'antd/dist/antd.css';
import './styles.css';

import TabComponent from '../../components/TabComponent';
import MenuComponent from './../../components/MenuComponent';
import UploadComponent from './../../components/UploadComponent';

import { IMenuItem } from './../../interfaces/IMenuItem';

import Avatar from "../../assets/avatar.png";
import LogoFooter from '../../assets/logo-footer-bry.png';
import LogoHeader from '../../assets/logo-header-bry-signer.png';

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

  const menuItem = new Array<IMenuItem>();
  menuItem.push({ id: 1, icon: <FileTextOutlined />, text: 'DOCUMENTOS' });
  menuItem.push({ id: 2, icon: <LayoutOutlined />, text: 'MODELOS' });
  menuItem.push({ id: 3, icon: <SlidersOutlined />, text: 'CONFIGURAÇÕES' })
  menuItem.push({ id: 4, icon: <LogoutOutlined />, text: 'SAIR' });

  const tabs = new Array<ITabHeaderItem>();
  tabs.push({ id: 1, number: '72', text: 'Documentos', icon: <CheckOutlined style={{ fontSize: 16 }} />, content: 'Documento 1' });
  tabs.push({ id: 2, number: '06', text: 'Pendentes', icon: <FileSyncOutlined style={{ fontSize: 16 }} />, content: 'Pendentes 1' });
  tabs.push({ id: 3, number: '32', text: 'Finalizados', icon: <FileProtectOutlined style={{ fontSize: 16 }} />, content: 'Documento 1' });
  tabs.push({ id: 4, number: '02', text: 'Rejeitados', icon: <FileExclamationOutlined style={{ fontSize: 16 }} />, content: 'Pendentes 1' });
  tabs.push({ id: 5, number: '30', text: 'Cancelados', icon: <StopOutlined style={{ fontSize: 16 }} />, content: 'Documento 1' });
  tabs.push({ id: 6, number: '02', text: 'Rascunhos', icon: <ProfileOutlined style={{ fontSize: 16 }} />, content: 'Pendentes 1' });

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

            <MenuComponent menuItem={menuItem} />

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

            <div className='content-container'>

              <div className='content-header'>
                Documentos
              </div>

              <div className='content-main'>

                <TabComponent tab={tabs}></TabComponent>

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
              <img src={LogoFooter} alt='Logo da BRy Tecnologia' />
            </div>
          </Footer>
        </Layout>
      </Layout>
    </div>

  );
}