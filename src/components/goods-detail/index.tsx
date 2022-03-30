import React from 'react'
import styles from './index.module.scss';

type Props = {
  desc: string;
  imgs: string[];
}

export default function GoodsDetail({
  desc,
  imgs,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>商品详情</div>
      <div className={styles.desc}>
        {desc}
      </div>
      <div className={styles.imgs}>
        {imgs.map((img, idx) => (
          <img className={styles.img} key={idx} alt='goods-img' src={img}></img>
        ))}
      </div>
    </div>
  )
}