import React from "react";
import { number, bool, func } from "prop-types";
import classnames from "classnames";

import styles from "./PaginationItem.module.css";

const PaginationItem = (props) => {
  const classes = classnames({ [`${styles.Active}`]: props.isActivePage });

  return (
    <button onClick={() => props.onClick(props.pageNumber)} className={classes}>
      {props.pageNumber}
    </button>
  );
};

PaginationItem.propTypes = {
  pageNumber: number.isRequired,
  isActivePage: bool.isRequired,
  onClick: func.isRequired,
};

export default PaginationItem;
