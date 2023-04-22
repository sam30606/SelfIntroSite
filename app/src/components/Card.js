import React from "react";
import CardStyle from "../assets/wrapper/CardStyle";

import { ShowDetail } from "./ShowDetail";
import { useState } from "react";
export const Card = () => {
  const [ButtonPop, setButtonPop] = useState(false);
  return (
    <CardStyle>
      <article className="card">
        <div className="card-up">
          <img src="/test.jpg" alt=""></img>
        </div>
        <div className="card-down">
          <div className="title">titletttttt中文</div>
          <p>
            pasdasdasdfjkwgdfiujasdgbfa中文中中文中文中文中文中文中文中文中文中文中文文中文中文中文中文wsdf
            pasdasdasdfjkwgdfiujasdgbfa中文中中文中文中文中文中文中文中文中文中文中文文中文中文中文中文wsdf
          </p>
        </div>
        <button
          type="button"
          class="nes-btn"
          onClick={() => setButtonPop(true)}
        >
          詳細介紹
        </button>
      </article>
      <ShowDetail trigger={ButtonPop} setButtonPop={setButtonPop} />
    </CardStyle>
  );
};
