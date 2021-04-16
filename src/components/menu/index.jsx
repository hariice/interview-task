import React from "react";
import "./menu.scss";
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import { HomeOutlined ,  TableOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const Menucomponent = () => {
    return (
        <>
        <Menu  mode="horizontal">
        
        <Menu.Item key="Table"  icon={<TableOutlined />}>
        <Link to="/table">
                Table
            </Link>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
      <Link to="/forms">
        Form
      </Link>
          
        </Menu.Item>
      </Menu>
        
          
            
        </>
    )
}
export default Menucomponent;
