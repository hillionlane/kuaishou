import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

type Props = {
  className?: string;
}

export default function Divider({ className }: Props) {
  return (
    <div className={cx(styles.divider, className)}></div>
  )
}