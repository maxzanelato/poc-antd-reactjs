import React, { useState } from 'react';

import { Form, Input, Button, DatePicker } from 'antd';

import './styles.css';

export default function AdvancedSearch() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');

  const onFormLayoutChange = ({ layout }: any) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
        wrapperCol: { span: 14, offset: 4 },
      }
      : null;

  return (
    <div className="advanced-container">
      <h3>Pesquisa avançada</h3>
      <Form
        {...formItemLayout}
        layout="vertical"
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Criador">
          <Input placeholder="Insira nome, e-mail ou telefone" />
        </Form.Item>
        <Form.Item label="Nome do documento">
          <Input placeholder="Insira o nome do documento" />
        </Form.Item>
        <Form.Item label="Contem palavras">
          <Input placeholder="Palavras que o documento contém" />
        </Form.Item>
        <Form.Item label="Não contém palavras">
          <Input placeholder="Palavras que o documento não contém" />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="year"
            label="Data de criação inicial"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label="Data de criação final"
            name="month"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Times">
          <Input placeholder="Insira os times" />
        </Form.Item>

        <Form.Item {...buttonItemLayout} style={{ textAlign: "right" }}>
          <Button type="primary" style={{ color: '#FFFFFF' }}>Pesquisar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};