import React from 'react';

import 'antd/dist/antd.css';
import './styles.css';

import logoFooter from '../../assets/logo-footer-bry.png';
import avatar from '../../assets/avatar.png';
import logoHeader from '../../assets/logo-header-bry-signer.png';

import MenuComponent from './../../components/Menu/index';
import { IMenuItem } from './../../interfaces/IMenuItem';

import { Layout, Icon, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default function Documents(): any {
  const x = new Array<IMenuItem>();
  x.push({ id: 1, icon: 'file-text', text: 'DOCUMENTOS' });
  x.push({ id: 2, icon: 'layout', text: 'MODELOS' });
  x.push({ id: 3, icon: 'sliders', text: 'CONFIGURAÇÕES' })
  x.push({ id: 4, icon: 'logout', text: 'SAIR' });

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

            <img src={avatar} alt='Avatar' />
            <span className='name-avatar'>João da Silva</span>
            <span className='afiliation-avatar'>
              Conta BRy Tecnologia
              <Icon type="down" style={{ color: "#A0AFBC", fontSize: 12, paddingLeft: 5 }} />
            </span>


            <MenuComponent menuItem={x} />

          </div>

        </Sider>
        <Layout>
          <Header>
            <div className='header-container'>
              <div>
                <img src={logoHeader} alt='Logo do BRy Signer' />
              </div>

              <div>
                <Button type="primary" icon="edit">NOVA ASSINATURA</Button>
                <Button type="link" icon="bell"></Button>
              </div>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360, height: '80vh' }}>content</div>
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