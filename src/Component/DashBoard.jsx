import React from "react";
import { dashboardData } from "../utils/dataText";

const CardDashBoard = ({ item }) => {
  return (
    <div id={item.id} className={`card`}>
      <div className="card__header">
        <img src={`./assets/icon-${item.id}.svg`} alt="logo" />
        <span>{item.pseudo}</span>
      </div>
      <div className="card__body">
        <h2>{item.number}</h2>
        <span>{item.id === "yt" ? "Subscribers" : "Followers"}</span>
      </div>
      <div className="card__footer">
        {item.color === "green" && (
          <img src={`./assets/icon-up.svg`} alt="logo" />
        )}
        {item.color === "red" && (
          <img src={`./assets/icon-down.svg`} alt="logo" />
        )}
        <span className={item.color}>{item.today} Today</span>
      </div>
    </div>
  );
};

const DashBoard = () => {
  return (
    <section id="dashboard">
      <div className="cw">
        {dashboardData.map((item, k) => (
          <CardDashBoard key={k} item={item} />
        ))}
      </div>
    </section>
  );
};

export default DashBoard;
