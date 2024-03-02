import { Button, Divider, Space } from "antd";
import React from "react";
import CardItem from "@/entities/CardItem/CardItem";

const cardsData = [
  { title: "Card title 1", id: 1 },
  { title: "Card title 2", id: 2 },
];

const HomePage = () => {
  return (
    <>
    <Space direction="horizontal" style={{gap: '20px'}}>
      {cardsData.map((card) => (
        <CardItem key={card.id} title={card.title} id={card.id}></CardItem>
      ))}
    </Space>
    <Divider />
    </>


  );
};

export default HomePage;
