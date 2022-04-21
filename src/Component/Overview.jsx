import React from "react";
import { overviewData } from "../utils/dataText";

const CardOverview = ({ item }) => {
  return (
    <div id={item.id} className={`card`}>
      <div className="card__header">
        <span>{item.text}</span>
        <img
          height="20"
          width="20"
          src={`./assets/icon-${item.id}.svg`}
          alt="logo"
        />
      </div>
      <div className="card__body">
        <h2>{item.number}</h2>

        <div className="percent">
          {item.color === "green" && (
            <img src={`./assets/icon-up.svg`} alt="logo" />
          )}
          {item.color === "red" && (
            <img src={`./assets/icon-down.svg`} alt="logo" />
          )}
          <span className={item.color}>{item.percent}%</span>
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <section id="overview">
      <div className="cw">
        <h3>Overview - Today</h3>
        <div className="cards">
          {overviewData.map((item, k) => (
            <CardOverview item={item} key={k} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
