import React from "react";
import { string, bool, func } from "prop-types";

const NavigationItem = (props) => (
  <button onClick={() => props.onClick()} disabled={props.disabled}>
    {props.label}
  </button>
);

NavigationItem.propTypes = {
  label: string,
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default NavigationItem;
