import React from "react";
import { percent } from "../../scripts/math";
import Finder from "../../components/Finder";
import format from "../../scripts/format";
import s from "./Informations.module.scss";

const Informations = (v: Validator) => {
  /* render */
  const list = [
    {
      label: "Operator address",
      value: v.operatorAddress
    },
    {
      label: "Account address",
      value: <Finder q="account">{v.accountAddress}</Finder>
    },
    {
      label: "Max commission rate",
      value: percent(v.commissionInfo.maxRate)
    },
    {
      label: "Max daily commission change",
      value: percent(v.commissionInfo.maxChangeRate)
    },
    {
      label: "Last commission change",
      value: `${format.date(v.commissionInfo.updateTime)}`
    }
  ];

  return (
    <ul className={s.list}>
      {list.map(({ label, value }) => (
        <li key={label}>
          <h1>{label}</h1>
          <p>{value}</p>
        </li>
      ))}
    </ul>
  );
};

export default Informations;
