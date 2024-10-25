import React from 'react';
import { Layout, Typography, Space, Slider, Button } from 'antd';
import { PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined, RetweetOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './FullPlayer.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function FullPlayer() {
  return (
    <Layout className="layout">
      <Content className="content">
        <div className="player-container">
          <div className="album-cover">
            <img src="/placeholder.svg" alt="Album cover - Night scene of a traditional Chinese street" />
          </div>
          <div className="song-info">
            <Title level={3}>倦未了 (忧念版)</Title>
            <Space direction="vertical" size={1} className="credits">
              <Text>Bass：李小工作室（小白）</Text>
              <Text>吉他：聂小慧工作室（石头）</Text>
              <Text>和声：聂小慧工作室（鱼香肉丝）</Text>
              <Text>监制：萧跃/Andy</Text>
              <Text>制作人：聂小慧</Text>
              <Text type="secondary">未经允许，不得翻唱或者使用</Text>
            </Space>
            <div className="lyrics">
              <Text>前世欠你的债今生却难了</Text>
              <Text>破镜重圆的人迟迟未到</Text>
              <Text>缘分被你抛撒在风中萧条</Text>
              <Text>伤我千遍万遍还嫌少</Text>
              <Text>前世欠你的债今生却难了</Text>
              <Text>破镜重圆的人迟迟未到</Text>
            </div>
          </div>
        </div>
        <div className="player-controls">
          <Slider defaultValue={1} max={280} />
          <div className="time-display">
            <span>00:02</span>
            <span>04:40</span>
          </div>
          <div className="control-buttons">
            <Button icon={<RetweetOutlined />} />
            <Button icon={<StepBackwardOutlined />} />
            <Button icon={<PlayCircleOutlined />} size="large" />
            <Button icon={<StepForwardOutlined />} />
            <Button icon={<UnorderedListOutlined />} />
          </div>
        </div>
      </Content>
    </Layout>
  );
}