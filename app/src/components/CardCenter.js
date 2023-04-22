import React from "react";
import { Card } from "../components/Card";
import CardCenterSytle from "../assets/wrapper/CardCenterSytle";

export const CardCenter = () => {
  return (
    <CardCenterSytle>
      <div className="card-center">
        <Card></Card>
        <Card></Card>
      </div>
    </CardCenterSytle>
  );
};
