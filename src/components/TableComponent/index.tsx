import React from 'react';

import { Table, Tag, Popover, Input } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import { EditOutlined, DeleteOutlined, MoreOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';

import ShowConfirm from './../ModalComponent';
import AdvancedSearch from './../AdvancedSearch';

const type = 'DragbleBodyRow';

const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }: any) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      moveRow((item as any).index, index);
    },
  });
  const [, drag] = useDrag({
    item: { type, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

const columns = [
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Pendência',
    dataIndex: 'pendency',
    key: 'pendency',
  },
  {
    title: 'Data criação',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Data limite',
    dataIndex: 'limitDate',
    key: 'limitDate',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
  },
];

const contentMenuPlus = (
  <div>
    <p>Download</p>
    <p>Notificar novamente</p>
    <p>Cancelar</p>
    <p>Rejeitar</p>
    <p>Exportar planilha</p>
  </div>
);

class DragSortingTable extends React.Component {

  state = {
    data: [],
    rowSelection: {},
  };

  components = {
    body: {
      row: DragableBodyRow,
    },
  };

  componentDidMount() {
    const dataInput = [];
    for (let i = 0; i < 100; i++) {
      dataInput.push({
        key: (i.toString()),
        title: <div style={{ color: '#009CDA' }}>
          Contrato de aluguel {i}
        </div>,
        status: <Tag color="green" key='1'>
          Status
        </Tag>,
        pendency: <Tag color="blue" key='1'>
          Aguardando revisão
      </Tag>,
        createdAt: '10 de janeiro de 2020',
        limitDate: '10 de fevereiro de 2020',
        action: <>
          <EditOutlined style={{ paddingRight: 10 }} />
          <DeleteOutlined style={{ paddingRight: 10 }} onClick={ShowConfirm} />
          <Popover content={contentMenuPlus} trigger="click" placement="bottomRight">
            <MoreOutlined style={{ paddingRight: 10 }} />
          </Popover>
        </>
      });
    }

    this.setState({ data: dataInput });
  }

  moveRow = (dragIndex: any, hoverIndex: any) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];

    this.setState(
      update(this.state, {
        data: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        },
      }),
    );
  };

  render() {

    // rowSelection objects indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record: any, selected: any, selectedRows: any) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
        console.log(selected, selectedRows, changeRows);
      },
    };

    return (
      <>

        <Input
          placeholder="Pesquisar"
          size="large"
          prefix={<SearchOutlined className="site-form-item-icon" />}
          suffix={
            <Popover content={<AdvancedSearch />} trigger="click" placement="bottomRight" overlayStyle={{
              width: "74vw"
            }}>
              <DownOutlined />
            </Popover>
          }
        />

        <DndProvider backend={HTML5Backend}>
          <Table
            style={{ paddingTop: 30 }}
            columns={columns}
            dataSource={this.state.data}
            components={this.components}
            rowSelection={rowSelection}
            size="small"
            scroll={{ x: 'auto', y: 300 }}
            onRow={(record, index) => ({
              index,
              moveRow: this.moveRow,
            }) as any}
          />
        </DndProvider>
      </>
    );
  }
}

export default DragSortingTable;