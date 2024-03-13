import { Table, TableProps } from 'antd';
import { useModel } from '@modern-js/runtime/model';
import Item from '@/apis/schema/Item';
import { itemsModel } from '@/models/ItemsModel';

const ItemTable = () => {
  const [itemsState] = useModel(itemsModel);
  const columns: TableProps<Item>['columns'] = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'Id',
      width: 100,
    },
    {
      key: 'name',
      title: '名称',
      dataIndex: 'Name',
    },
  ];

  return (
    <Table size="small" columns={columns} dataSource={itemsState.filtered} />
  );
};

export default ItemTable;
