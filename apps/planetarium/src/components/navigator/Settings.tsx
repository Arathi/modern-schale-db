import { Form, Select, SelectProps, Radio, FormProps } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const Settings: React.FC<FormProps> = props => {
  const serverOptions: SelectProps['options'] = [
    {
      value: 'japan',
      label: '日服',
    },
    {
      value: 'global',
      label: '国际',
    },
    {
      value: 'china',
      label: '国服',
    },
  ];

  const languageOptions: SelectProps['options'] = [
    {
      value: 'jp',
      label: '日本語',
    },
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'zh',
      label: '简体中文',
    },
  ];

  const version = 'v250';
  const updated = '2024-03-12';

  return (
    <Form {...props} className="settings">
      <Form.Item label="服务器">
        <Select options={serverOptions} />
      </Form.Item>
      <Form.Item label="语言">
        <Select options={languageOptions} />
      </Form.Item>
      <Form.Item label="主题">
        <Radio.Group>
          <Radio.Button value="light">
            <SunOutlined />
          </Radio.Button>
          <Radio.Button value="night">
            <MoonOutlined />
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <span>
        {version} - 最后更新于 {updated}
      </span>
    </Form>
  );
};

export default Settings;
