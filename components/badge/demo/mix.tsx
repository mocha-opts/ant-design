import React from 'react';
import { Avatar, Badge, Space } from 'antd';

const App: React.FC = () => (
  <Space size="middle">
    <Badge count={5} status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);

export default App;
