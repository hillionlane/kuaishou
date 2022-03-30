import { RightOutline } from 'antd-mobile-icons';
import React from 'react'
import cx from 'classnames';
import styles from './index.module.scss';

type Props = {
  left?: any;
  right?: any;
  showNavigator?: boolean;
  className?: string;
}

const Cell: React.FC<Props> = ({ className, showNavigator, children, left, right }) => {
  return (
    <div className={cx(styles.cell, className)}>
      {left}
      <div className={styles.cellMain}>
        {children}
      </div>
      <div className={styles.cellRight}>
        {right || (showNavigator && <RightOutline />)}
      </div>
    </div>
  )
}

export default Cell;