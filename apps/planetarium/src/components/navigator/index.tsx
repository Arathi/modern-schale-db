import { useState } from 'react';
import { Flex, Button, Input } from 'antd';
import { useNavigate } from '@modern-js/runtime/router';
import { SettingOutlined } from '@ant-design/icons';
import Settings from './Settings';
import Logo from '@/components/logo';
import './index.scss';

const Index = () => {
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  function toggleShowSettings() {
    setShowSettings(!showSettings);
  }

  return (
    <Flex justify="center" align="center" className={'navigator'}>
      <Flex justify="start" align="center" className={'left'} gap={8}>
        <Logo />
        <Button type="link" onClick={() => navigate('/')}>
          首页
        </Button>
        <Button type="link" onClick={() => navigate('/students')}>
          学生
        </Button>
        <Button type="link" onClick={() => navigate('/items')}>
          物品
        </Button>
      </Flex>
      <Flex justify="end" align="center" gap={8}>
        <Input />
        <Button icon={<SettingOutlined />} onClick={toggleShowSettings} />
        <Settings
          labelCol={{ span: 8 }}
          style={{ display: showSettings ? undefined : 'none' }}
        />
      </Flex>
    </Flex>
  );
};

export default Index;
