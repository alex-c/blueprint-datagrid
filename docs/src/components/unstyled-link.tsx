import React from "react";
import { Link, LinkProps } from "react-router-dom";

export const UnstyledLink = (props: LinkProps) => {
  return <Link {...props} style={{ color: "inherit", textDecoration: "inherit" }} />;
};
