import { MenuItem } from "@blueprintjs/core";
import { Link } from "react-router-dom";

interface MenuLinkProps {
  path: string;
  title: string;
}

export const MenuLink = (props: MenuLinkProps) => {
  return (
    <Link to={props.path} className="menu-link">
      <MenuItem text={props.title} />
    </Link>
  );
};
