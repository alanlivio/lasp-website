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
      message: 'Graph Based Machine Learning',
    }),
    image: {
      src: '/img/topics/graphs.webp',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <p>
        We exploit graph signal processing to derive efficient optimization strategies for large scale problems. The key intuition is to learn in a sparse but representative domain. Possible applications are: optimal placement of heating sources in sensor networks, optimal ads in social networks, orrecommendations in high-dimensional problems.
      </p>
    ),
  },
  {
    title: translate({
      message: 'Immersive Communications ',
    }),
    image: {
      src: '/img/topics/immersive.webp',
      width: 1108,
      height: 731.18,
    },
    text: (
      <p id="homepage.features.built-using-react.text">
        A major challenge for the next decade is to design virtual, augmented, and mixed reality systems (VR at large) for real-world use cases such as healthcare, creative technology, e-education, and high-risk missions. This requires VR systems to operate at scale, in a personalised manner, remaining bandwidth-tolerant whilst meeting quality and latency criteria. This can be accomplished only by a fundamental revolution of the coding/streaming/rendering chain that has to put the interactive user at the heart of the system rather than at the end of the chain.
      </p>
    ),
  },
  {
    title: translate({
      message: 'Spatio-Temporal Graph-RNN for Point Cloud Prediction',
    }),
    image: {
      src: '/img/topics/point-cloud.webp',
      width: 1137,
      height: 776.59,
    },
    text: (
      <p id="homepage.features.ready-for-translations.text">
        We designed a Graph neural network able process irregular point cloud sequences and make accurate predictions of future movements, while persevering the shape.
      </p>
    ),
  },
  {
    title: translate({
      message: 'User Behaviour Analysis in VR Systems',
    }),
    image: {
      src: '/img/topics/vr.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <p>
        Do we understand how people interact with technology? Can we model users’ behaviour in VR systems, inferring the correlation between users’ interactivity and the VR content?
      </p>
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
      <p id="homepage.features.content-search.text">
        Make it easy for your community to find what they need in your
        documentation. We proudly support Algolia documentation search.
      </p>
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
            height="300"
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
  const firstRow = FEATURES.slice(0, 2);
  const secondRow = FEATURES.slice(2,4);

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