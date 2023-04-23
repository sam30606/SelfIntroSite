import React from "react";
import VerticalBoxStyle from "../assets/wrapper/VerticalBoxStyle";

export const VerticalBox = (props) => {
  const { id, order_id, show_type, title, sub, content, img_url } = props;
  return (
    <VerticalBoxStyle>
      <div key={id} order={order_id} className="verticalBox">
        <div className="verticalBox-left">
          <div className="title">{title}</div>
          <p>{content}</p>
        </div>
        <div className="vl"></div>
        <div className="verticalBox-right">
          <img src="test.jpg" alt=""></img>
          <div className="iconCenter">
            <i className="nes-icon nes-pointer linkedin is-large"></i>
            <a
              className="nes-icon nes-pointer github is-large"
              href="https://github.com/sam30606"
            ></a>
            <i className="nes-icon nes-pointer instagram is-large"></i>
            <i className="nes-icon nes-pointer gmail is-large"></i>
          </div>
        </div>
      </div>
    </VerticalBoxStyle>
  );
};
