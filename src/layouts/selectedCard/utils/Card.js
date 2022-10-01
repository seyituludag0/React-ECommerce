import { useState } from "react";
import style from "../card.module.css"

const Card = ({ type }) => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => {
    if (type === "free") {
      setIsSelected(!isSelected);
    } else if (type === "standard") {
      setIsSelected(!isSelected);
    } else if (type === "premium") {
      setIsSelected(!isSelected);
    }
  };
  return (
    <section className={`${isSelected ? style.cardSelect : ""}`}>
      <div>
        <h3>
          {(type === "free" && "Free Plan") ||
            (type === "standard" && "Standard Plan") ||
            (type === "premium" && "Premium Plan")}
        </h3>
        <ul className="px-16">
          <li className="flex items-center">
            <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
              Unlimited Bandwitch
            </p>
          </li>
          <li className="flex items-center">
            <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
              Encrypted Connection
            </p>
          </li>
          <li className="flex items-center">
            <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
              {(type === "free" && "No Traffic Logs") ||
                (type === "standard" && "Yes Traffic Logs") ||
                (type === "premium" && "Yes Traffic Logs")}
            </p>
          </li>
          <li className="flex items-center">
            <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
              Works on All Devices
            </p>
          </li>
          {(type === "standard" || type === "premium") && (
            <li className="flex items-center">
              <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                Connect Anyware
              </p>
            </li>
          )}
          {type === "premium" && (
            <li className="flex items-center">
              <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                Get New Features
              </p>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-medium mb-5">
          {type === "free" && "Free"}
        </h2>
        <button onClick={() => clickHandler()}>select</button>
      </div>
    </section>
  );
};

export default Card;
