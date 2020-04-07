import React from 'react';

import { Modal } from 'antd';

export default function ShowConfirm() {
  Modal.confirm({
    title: 'Deseja realmente excluir o documento?',
    content: (
      <div>
        <p>Essa ação removerá o documento da arquivos.</p>
      </div>
    ),
    okText: 'Excluir',
    cancelText: 'Cancelar',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    }
  });
}