import React from 'react'
import styles from './index.module.scss';
import { ReactComponent as Star } from '../../../../assets/icon/star.svg';
import VerticalBtn from '../../../../components/vertical-btn';
import { Button } from 'antd-mobile';


type Props = {}

export default function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <div className={styles.btnWrap}>
        <VerticalBtn titleClassName={styles.btnText} className={styles.btn} icon={<span className='iconfont icon-user2' />}>
          个人主页
        </VerticalBtn>
        <VerticalBtn titleClassName={styles.btnText} className={styles.btn} icon={<span className='iconfont icon-shop2' />}>
          店铺
        </VerticalBtn>
        <VerticalBtn titleClassName={styles.btnText} className={styles.btn} icon={<span className='iconfont icon-im5' />}>
          客服
        </VerticalBtn>
      </div>

      <div className={styles.mainBtnWrap}>
        <Button className={styles.mainBtn} block color='danger' shape='rounded' >领券购买</Button>
      </div>
    </div>
  )
}