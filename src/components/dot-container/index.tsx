import React from 'react'
import cx from 'classnames';
import styles from './index.module.scss';

type Props = {}

const DotContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className={cx(styles.container)}>
      {children}
    </div>
  )
}

type ItemProps = {};

export const DotItem: React.FC<ItemProps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.item}>
      {children}
    </div>
  )
}

export default DotContainer;
