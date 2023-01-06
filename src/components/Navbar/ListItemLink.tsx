import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/Navbar/ListItemLink.module.scss";

interface ListItemLinkProps {
  url?: string;
  children?: ReactNode;
  clickHandler?: () => void;
  optionClass?: ReactNode;
}

const ListItemLink = ({
  url,
  children,
  clickHandler,
  optionClass,
}: ListItemLinkProps) => {
  return (
    <li className={` ${styles.listItem} ${optionClass}`} onClick={clickHandler}>
      <NavLink
        to={`/${url}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
};

ListItemLink.defaultProps = {
  url: "",
  optionClass: undefined,
};

export default ListItemLink;
