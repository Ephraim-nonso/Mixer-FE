import React from "react";
import Notify from "../components/notification/Notify";
import SelectHero from "../components/selecthero/SelectHero";

const SelectPage = () => {
  return (
    <div>
      <SelectHero />
      <Notify />
    </div>
  );
};

export default SelectPage;
