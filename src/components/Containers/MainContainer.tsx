import React, { ReactNode } from "react";

import styles from "../../styles/containers/MainContainer.module.css";

interface MainContainerProps {
  children?: ReactNode;
  optionClass?: ReactNode;
}

const MainContainer = ({ children, optionClass }: MainContainerProps) => {
  return <div className={`${styles.container} ${optionClass}`}>{children}</div>;
};

MainContainer.defaultProps = {
  optionClass: undefined,
};

export default MainContainer;
