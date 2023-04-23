import React from "react";
import { Card } from "../components/Card";
import CardCenterSytle from "../assets/wrapper/CardCenterSytle";
import { useSideContext } from "../context/SideContext";

export const CardCenter = () => {
  const { datas } = useSideContext();

  return (
    <CardCenterSytle>
      <div className="card-center">
        {datas.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </CardCenterSytle>
  );
};
