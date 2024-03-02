import React, { FC } from "react";
import { Card } from "antd";
import Paragraph from 'antd/lib/typography/Paragraph';
import { ICardItemProps } from "./CardItem.types";

const CardItem : FC<ICardItemProps> = ({title, id}) => {
  return (
    <Card title={title}>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis suscipit
        sed expedita consequatur in exercitationem aspernatur cupiditate? Vel,
        repellat quia. Cum qui ut necessitatibus minus neque, quasi error.
        Incidunt, qui.
      </Paragraph>
    </Card>
  );
};

export default CardItem;
