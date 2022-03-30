import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

type Props = {
  icon: any;
  className?: string;
  titleClassName?: string;
}

const VerticalBtn: React.FC<Props> = ({
  icon,
  children,
  className,
  titleClassName,
}) => {
  return (
    <div className={cx(styles.wrap, className)}>
      <div>{icon}</div>
      <div className={titleClassName}>{children}</div>
    </div>
  )
}

export default VerticalBtn;
