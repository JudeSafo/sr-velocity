// Copyright Schulich Racing FSAE
// Written by Justin Tijunelis

import React from "react";
import "./_styling/dropdown.css";
import Select, { Props } from "react-select";

const style = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : state.isFocused ? "white" : "black",
    background: state.isSelected
      ? "#ba1833"
      : state.isFocused
      ? "#ba183380"
      : "white",
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : state.isFocused ? "white" : "black",
    background: "#ba1833",
  }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    color: "#ba1833",
  }),
};

export const DropDown: React.FC<Props> = (props: Props) => {
  return <Select className="dropdown" {...props} styles={style} />;
};
