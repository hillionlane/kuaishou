import React from 'react'
import cx from 'classnames';
import styles from './index.module.scss';

type Props = {
  name: string;
  score: number;
  className?: string;
}

export default function ShopScoreItem({
  name,
  score,
  className,
}: Props) {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.name}>{name}</div>
      <div className={styles.score}>{score}</div>
    </div>
  )
}