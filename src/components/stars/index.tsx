import React, { useMemo } from 'react';
import { ReactComponent as StarSvg }  from '../../assets/icon/star.svg';
import cx from 'classnames';
import styles from './index.module.scss';

type Props = {
  total: number;
  value: number;
  className?: string;
}

export default function Stars({ className, total, value }: Props) {
  const stars = useMemo(() => {
    return new Array(total).fill(0).map((_, idx) => (
      <StarSvg key={idx} />
    ));
  }, [total]);
  const percent = useMemo(() => {
    const left = total - value;
    return Math.round((left * 1000 / total)) / 10;
  }, [total, value]);
  return (
    <div className={cx(styles.container, className)}>
      {stars}
      <div className={styles.cover} style={{ width: `${percent}%` }}></div>
    </div>
  )
}