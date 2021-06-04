import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "日日是好日",
    Svg: require("../../static/img/illustrations/OneRankedIxia.svg").default,
    description: <>十五日以前不问汝，十五日以后道将一句来</>,
  },
  {
    title: "思考和成长",
    Svg: require("../../static/img/illustrations/Louis14th.svg").default,
    description: <>
    “很多人的失落，是违背了自己少年时的立志。自认为成熟、自认为练达、自认为精明，从前多幼稚，总算看透了、想穿了。于是，我们就此变成自己年少时最憎恶的那种人。”</>,
  },
  {
    title: "非现实的香气",
    Svg: require("../../static/img/illustrations/pinkrose.svg").default,
    description: <>梦想充满诗意地生活，毕生期待和采集，度过悠长的一生；到晚年可以写出十行好诗。</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
