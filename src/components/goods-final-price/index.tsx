import { Tag } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons';
import React, { useMemo } from 'react'
import styles from './index.module.scss';
import cx from 'classnames';

type Props = {
  title?: string;
  className?: string;
  price: number;
}

export default function GoodsFinalPrice({ className, title = '预估到手价', price }: Props) {
  const priceStr = useMemo(() => {
    return price / 100;
  }, [price]);
  return (
    <Tag className={cx(styles.container, className)} color="danger" round>
      <span>
        {title}
      </span>
      <span className={styles.symbol}>
        ¥
      </span>
      <span className={styles.price}>{priceStr}</span>
      <RightOutline />
    </Tag>
  )
}