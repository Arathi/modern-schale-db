import { Helmet } from '@modern-js/runtime/head';
import { Flex } from 'antd';
import { useEffect } from 'react';
import { useModel } from '@modern-js/runtime/model';
import ItemFilter from './ItemFilter';
import ItemTable from './ItemTable';
import { itemsModel } from '@/models/ItemsModel';
import SchaleDatabaseApi from '@/apis/SchaleDatabaseApi';

const api = new SchaleDatabaseApi();

const Index = () => {
  const [, actions] = useModel(itemsModel);

  useEffect(() => {
    api.loadItems().then(items => {
      if (items != null) {
        actions.setItems(items);
      }
    });
  }, []);

  return (
    <>
      <Helmet title="物品" />
      <Flex
        gap={8}
        style={{
          padding: 8,
        }}
      >
        <Flex gap={8} vertical flex={1}>
          <ItemFilter />
          <ItemTable />
        </Flex>
        <Flex flex={1}>
          <div></div>
        </Flex>
      </Flex>
    </>
  );
};

export default Index;
