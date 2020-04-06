import React from 'react';

import { Menu } from 'antd';
import { IMenuItem, OwnPropsIMenuItem } from './../../interfaces/IMenuItem';

import './styles.css';

export default function MenuComponent({ menuItem }: OwnPropsIMenuItem): any {

  return (

    <Menu mode="inline" defaultSelectedKeys={['' + menuItem.length]} className="customclass">

      {
        menuItem.map((element: IMenuItem) => (
          <Menu.Item key={element.id}>
            {element.icon}
            <span className="nav-text">{element.text}</span>
          </Menu.Item>
        ))
      }

    </Menu>

  );
}