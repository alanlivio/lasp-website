import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { text } from 'body-parser';

type ProfileProps = {
  className?: string;
  text: string;
  name: string;
  page,
  imgpath,
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

export function TeamProfileCard({
  className,
  text,
  name,
  page,
  imgpath,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <a href={`${page}`}>
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${imgpath}`}
              alt={`${name}'s avatar`}
            />
            </a>
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
            {text}
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Twitter
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--4 margin-bottom--lg" />
  );
}
