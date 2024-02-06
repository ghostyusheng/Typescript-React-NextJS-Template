import Header from "../common/header/layout"
import React from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'antd';
import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;



const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


export default function Page() {
    return (
        <div className="bg-neutral-700 px-20">
        <Header></Header>
        <Flex wrap="wrap" gap="small">
            {Array.from({ length: 24 }, (_, i) => (
            <Button key={i} type="primary">
                Button
            </Button>
            ))}
        </Flex>
        <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        aaaaaaaaaa111</div>
    )
}