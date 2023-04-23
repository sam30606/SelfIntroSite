import React from "react";
import HorizontalBoxStyle from "../assets/wrapper/HorizontalBoxStyle";

export const HorizontalBox = (props) => {
  const { id, order_id, show_type, title, sub, content, img_url } = props;
  return (
    <HorizontalBoxStyle>
      <div key={id} order={order_id} className="horizontalBox">
        <div className="title">{title}</div>
        <div className="content">
          <div className="sub">{sub}</div>
          <p>{content}</p>
        </div>
      </div>
    </HorizontalBoxStyle>
  );
};
