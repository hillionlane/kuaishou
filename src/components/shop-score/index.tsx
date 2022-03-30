import React from 'react'
import cx from 'classnames';
import ShopScoreItem from '../shop-score-item';
import Stars from '../stars'
import styles from './index.module.scss';

type Props = {
  className?: string;
  score: number;
  total?: number;
  label: string;
  scoreData?: {
    key: string;
    value: number;
    fontColor: string;
  }[];
}

export default function ShopScore({
  className,
  score,
  total = 5,
  scoreData = [],
  label
}: Props) {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.overview}>
        <span className={styles.overviewText}>{label}</span>
        <div  className={styles.stars}>
          <Stars total={total} value={score} />
        </div>
      </div>
      {scoreData.length && <div className={styles.scores}>
        {
          scoreData.map((scoreItem) => (
            <ShopScoreItem key={scoreItem.key} className={styles.scoreItem} name={scoreItem.key} score={scoreItem.value} />
          ))
        }
      </div>}
    </div>
  )
}