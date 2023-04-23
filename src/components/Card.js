import React from "react";
import CardStyle from "../assets/wrapper/CardStyle";

import { ShowDetail } from "./ShowDetail";
import { useState } from "react";
export const Card = (props) => {
  const { id, title, short_intro, intro, img_url, project_url } = props;
  const [ButtonPop, setButtonPop] = useState(false);
  return (
    <CardStyle>
      <article key={id} className="card">
        <div className="card-up">
          <img src={img_url} alt={title}></img>
        </div>
        <div className="card-down">
          <div className="title">{title}</div>
          <p>{short_intro}</p>
        </div>
        <button
          id="hiddenButton"
          type="button"
          className="nes-btn"
          onClick={() => setButtonPop(true)}
        >
          詳細介紹
        </button>
      </article>
      <ShowDetail
        trigger={ButtonPop}
        setButtonPop={setButtonPop}
        title={title}
        intro={intro}
        project_url={project_url}
      />
    </CardStyle>
  );
};
