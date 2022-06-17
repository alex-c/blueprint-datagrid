import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { IconName, IconNames } from "@blueprintjs/icons";
import { Icon } from "@blueprintjs/core";

type FeatureItem = {
  title: string;
  icon: IconName;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Common Table Features",
    icon: IconNames.JoinTable,
    description: (
      <>
        Blueprint Datagrid wraps the basic <code>HTMLTable</code> and adds common table features like sorting, filtering
        and pagination.
      </>
    ),
  },
  {
    title: "Faithful in Style",
    icon: IconNames.Style,
    description: (
      <>
        Built with Blueprint components and styling, Blueprint Datagrid stays faithful to the look-and-feel of the
        library in both dark and light mode.
      </>
    ),
  },
  {
    title: "Easy to Use",
    icon: IconNames.CodeBlock,
    description: <>Blueprint Datagrid aims to be easy to use, but still allows customization.</>,
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center" style={{ marginBottom: "10px" }}>
        <Icon icon={icon} size={80} color="#2d72d2" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
