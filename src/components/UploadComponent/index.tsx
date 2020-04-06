import React from 'react';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import './styles.css';

const { Dragger } = Upload;

const props = {
  showUploadList: false,
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: any) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} carregado com sucesso.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} falhou ao carregar.`);
    }
  }
}

export default function UploadComponent() {

  return (
    <div style={{ width: '100%', height: 60 }}>
      <Dragger {...props} style={{ width: '100%', borderColor: '#1890ff', background: 'rgba(0, 156, 218, 0.08)', paddingLeft: 10, paddingRight: 10 }}>
        <p className="ant-upload-text" style={{ color: '#1890ff' }}>
          Arraste os documentos aqui ou
        <Button style={{ marginLeft: 10, color: '#1890ff', borderColor: '#1890ff', display: 'inline-flex' }}>
            <UploadOutlined /> Selecione os documentos
        </Button>
        </p>
      </Dragger>
    </div>
  );

}