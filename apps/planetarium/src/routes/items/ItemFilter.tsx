import { useModel } from '@modern-js/runtime/model';
import { Form, Input, Select } from 'antd';
import { itemsModel } from '@/models/ItemsModel';

const ItemFilter = () => {
  const [state, actions] = useModel(itemsModel);

  function updateName(name: string | undefined) {
    const conditions = {
      ...state.filter,
      ...{
        name,
      },
    };
    actions.setFilter(conditions);
  }

  return (
    <Form layout={'inline'}>
      <Form.Item label="物品类型">
        <Select placeholder="物品类型" />
      </Form.Item>
      <Form.Item label="物品名称">
        <Input
          value={state.filter.name}
          placeholder="物品名称"
          onChange={e => updateName(e.target.value)}
        />
      </Form.Item>
    </Form>
  );
};

export default ItemFilter;
