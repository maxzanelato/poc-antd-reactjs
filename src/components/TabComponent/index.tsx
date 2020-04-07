import React from 'react';

import './styles.css';

import { Tabs } from 'antd';

import { ITabHeaderItem, OwnPropsITabHeaderItem } from './../../interfaces/ITabHeaderItem';

const { TabPane } = Tabs;

export default function ({ tab }: OwnPropsITabHeaderItem) {
  return (
    <Tabs defaultActiveKey="1">

      {
        tab.map((element: ITabHeaderItem) => (
          <TabPane
            tab={
              <span className='header-tab'>
                <span className='header-number-tab'>
                  {element.number}
                </span>
                <span className='header-text-tab'>
                  {element.text}
                </span>
                <span className='header-icon-tab'>
                  {element.icon}
                </span>
              </span>
            }
            key={element.id.toString()}
          >
            {element.content}
          </TabPane>
        ))
      }



    </Tabs>
  )
}