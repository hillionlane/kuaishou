import React, { useState } from 'react'
import { Swiper } from 'antd-mobile';
import styles from './index.module.scss';
// import './index.scss';

type Props = {
  imgs: string[];
}

const compClassName = 'goods-swiper';

export default function GoodsSwiper({
  imgs,
}: Props) {
  const renderIndicator = (total: number, current: number) => (
    <div className={styles.indicator}>
      {`${current + 1} / ${total}`}
    </div>
  );
  return (
    <Swiper indicator={renderIndicator}>
        {imgs.map((url, idx) => (
          <Swiper.Item key={idx}>
              <div>
                  <img alt="goods-banner" className={styles.img} src={url} />
              </div>
          </Swiper.Item>
        ))}
    </Swiper>
  )
}