import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Powered by MDX',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <text>
        XXXXXXX
      </text>
    ),
  },
  {
    title: translate({
      message: 'Built Using React',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/undraw_react.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Extend and customize your project&apos;s layout by writing React
        components. Leverage the pluggable architecture, and design your own
        site while reusing the same data created by Docusaurus plugins.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Ready for Translations',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        Localization comes out-of-the-box. Use git, Crowdin, or any other
        translation manager to translate your docs and deploy them individually.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Document Versioning',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        Support users on all versions of your project. Document versioning helps
        you keep documentation in sync with project releases.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Content Search',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Make it easy for your community to find what they need in your
        documentation. We proudly support Algolia documentation search.
      </Translate>
    ),
  },
];

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            className={styles.heroLogo}
            src={useBaseUrl('/img/topics/signal.jpg')}
            width="400"
            height="800"
          />
          <h1 className="hero__title">Learning And Signal Processing (LASP)</h1>
        </Heading>
        <div className={styles.indexCtas}>
          {/* <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=/LASP-UCL&amp;repo=helix&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span> */}
        </div>
      </div>
    </div>
  );
}


function Feature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = FEATURES.slice(0, 3);
  const secondRow = FEATURES.slice(3);

  return (
    <div>
    <div className="container text--left">
      <Heading as="h2">
      Our research activity focused on developing novel adaptive strategies for large-scale networks with applications including adaptive streaming strategies for virtual reality services, data-efficient multi-arm bandit problems for online recommendation systems, graph-based reinforcement learning for AI systems, and influence maximization over social networks. Our research is at the crossroad between multimedia processing, machine learning, and signal processing.
      </Heading>
    </div>
    <div className="container text--center">
      <Heading as="h2">
        <Translate>Main topics</Translate>
      </Heading>
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main>
        <HeroBanner />
        <div className={styles.section}>
          <FeaturesContainer />
        </div>
      </main>
    </Layout>
  );
}
