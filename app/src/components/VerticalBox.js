import React from "react";
import VerticalBoxStyle from "../assets/wrapper/VerticalBoxStyle";

export const VerticalBox = () => {
  return (
    <VerticalBoxStyle>
      <div className="verticalBox">
        <div className="verticalBox-left">
          <div className="title">楊詠勝</div>
          <p>tetsdfwef中文文</p>
        </div>
        <div className="vl"></div>
        <div className="verticalBox-right">
          <img src="test.jpg" alt=""></img>
          <div className="iconCenter">
            <i className="nes-icon nes-pointer linkedin is-large"></i>
            <i className="nes-icon nes-pointer github is-large"></i>
            <i className="nes-icon nes-pointer instagram is-large"></i>
            <i className="nes-icon nes-pointer gmail is-large"></i>
          </div>
        </div>
      </div>
    </VerticalBoxStyle>
  );
};
