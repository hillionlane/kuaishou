import { Button } from 'antd-mobile';
import React from 'react'
import Cell from '../cell';
import ShopScore from '../shop-score';
import styles from './index.module.scss';

type Props = {
  name: string;
  avatar: string;
  totalSell: string;
  url: string;
  className?: string;
  totalSellDesc?: string;
  scoreView: {
    compScoreLabel: string;
    compScoreStars: number;
    scoreData: {
      key: string;
      value: number;
      valueDes: string;
      fontColor: string;
    }[];
  }
}

export default function ShopInfo({ className, name, totalSell, avatar, url, totalSellDesc = '销量', scoreView }: Props) {
  return (
    <div className={className}>
      <Cell
        left={<img className={styles.avatar} alt="shop-avatar" src={avatar} ></img>}
        right={<Button fill='outline' size='mini' color='danger' shape='rounded' onClick={() => window.location.href = url}>进店逛逛</Button>}
      >
        <div>
          <div className={styles.name}>
            {name}
          </div>
          <div className={styles.stat}>
            {totalSellDesc} {totalSell}
          </div>
        </div>
      </Cell>
      <ShopScore label={scoreView.compScoreLabel} scoreData={scoreView.scoreData} score={scoreView.compScoreStars} className={styles.score} />
    </div>
  )
}