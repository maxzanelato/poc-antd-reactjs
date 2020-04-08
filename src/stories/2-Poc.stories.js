import React from "react";

import "antd/dist/antd.css";

import { Popover, Input, Button } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  FileTextOutlined,
  LayoutOutlined,
  SlidersOutlined,
  LogoutOutlined,
  CheckOutlined,
  FileSyncOutlined,
  FileProtectOutlined,
  FileExclamationOutlined,
  StopOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import TabComponent from "./../components/TabComponent";
import MenuComponent from "./../components/MenuComponent";
import TableComponent from "./../components/TableComponent";
import AdvancedSearch from "./../components/AdvancedSearch";
import ShowConfirm from "./../components/ModalComponent/index";
import UploadComponent from "../components/UploadComponent";

export default {
  title: "POC",
  component: AdvancedSearch,
};

export const advancedSearch = () => (
  <>
    <Input
      placeholder="Pesquisar"
      size="large"
      prefix={<SearchOutlined className="site-form-item-icon" />}
      suffix={
        <Popover
          content={<AdvancedSearch />}
          trigger="click"
          placement="bottomRight"
          overlayStyle={{
            width: "74vw",
          }}
        >
          <DownOutlined />
        </Popover>
      }
    />
  </>
);

const menuItem = [];
menuItem.push({ id: 1, icon: <FileTextOutlined />, text: "DOCUMENTOS" });
menuItem.push({ id: 2, icon: <LayoutOutlined />, text: "MODELOS" });
menuItem.push({ id: 3, icon: <SlidersOutlined />, text: "CONFIGURAÇÕES" });
menuItem.push({ id: 4, icon: <LogoutOutlined />, text: "SAIR" });

export const menu = () => <MenuComponent menuItem={menuItem} />;

export const modal = () => (
  <Button style={{ paddingRight: 10 }} onClick={() => ShowConfirm()}>
    Teste
  </Button>
);

const tabs = [];
tabs.push({
  id: 1,
  number: "72",
  text: "Documentos",
  icon: <CheckOutlined style={{ fontSize: 16 }} />,
  content: <TableComponent />,
});
tabs.push({
  id: 2,
  number: "06",
  text: "Pendentes",
  icon: <FileSyncOutlined style={{ fontSize: 16 }} />,
  content: <TableComponent />,
});
tabs.push({
  id: 3,
  number: "32",
  text: "Finalizados",
  icon: <FileProtectOutlined style={{ fontSize: 16 }} />,
  content: <TableComponent />,
});
tabs.push({
  id: 4,
  number: "02",
  text: "Rejeitados",
  icon: <FileExclamationOutlined style={{ fontSize: 16 }} />,
  content: <TableComponent />,
});
tabs.push({
  id: 5,
  number: "30",
  text: "Cancelados",
  icon: <StopOutlined style={{ fontSize: 16 }} />,
  content: <TableComponent />,
});
tabs.push({
  id: 6,
  number: "02",
  text: "Rascunhos",
  icon: <ProfileOutlined style={{ fontSize: 16 }} />,
  content: <TableComponent />,
});

export const tab = () => <TabComponent tab={tabs} />;

export const table = () => <TableComponent />;

export const upload = () => <UploadComponent />;
