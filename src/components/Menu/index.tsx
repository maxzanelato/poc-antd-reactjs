import React from 'react';

import { Menu, Icon } from 'antd';
import { IMenuItem, OwnPropsIMenuItem } from './../../interfaces/IMenuItem';

export default function MenuComponent({ menuItem }: OwnPropsIMenuItem): any {

  menuItem.map((el: IMenuItem) => console.log(el.id))

  return (

    <Menu mode="inline" defaultSelectedKeys={['' + menuItem.length]}>

      {
        menuItem.map((element: IMenuItem) => (
          <Menu.Item key={element.id}>
            <Icon type={element.icon} />
            <span className="nav-text">{element.text}</span>
          </Menu.Item>
        ))
      }

    </Menu>

  );
}