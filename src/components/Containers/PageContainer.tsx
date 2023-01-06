import React, { ReactNode } from "react";
import styles from "../../styles/Containers/PageContainer.module.scss";

interface PageContainerProps {
  children?: ReactNode;
  optionClass?: ReactNode;
}

const PageContainer = ({ children, optionClass }: PageContainerProps) => {
  return <div className={`${styles.container} ${optionClass}`}>{children}</div>;
};

PageContainer.defaultProps = {
  optionClass: undefined,
};

export default PageContainer;
