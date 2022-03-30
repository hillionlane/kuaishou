import React, { useMemo } from 'react'
import Cell from '../cell';
import Divider from '../divider';
import DotContainer, { DotItem } from '../dot-container';
import GoodsFinalPrice from '../goods-final-price'
import Price from '../price';
import styles from './index.module.scss';

type Props = {
  title: string;
  expressInfo: {
    deliveryDesc: string;
  }
  price: number;
  promotedPrice: number;
  promotedTitle: string;
  serviceRule: {
    refundRuleVO: {
      text: string;
      title: string;
    }
  };
  expressTemplate: {
    sendCityName: string;
    sendProvinceName: string;
  }
}

export default function GoodsBriefInfo({
  title,
  expressInfo,
  price,
  promotedPrice,
  promotedTitle,
  serviceRule,
  expressTemplate,
}: Props) {
  console.log(promotedPrice);
  console.log(price);
  const { refundRuleVO } = serviceRule;
  return (
    <div className={styles.container}>
      <div className={styles.priceLine}>
        <Price price={price} />
        <GoodsFinalPrice title={promotedTitle} price={promotedPrice} className={styles.finalPrice} />
      </div>

      <div className={styles.titleWrap}>
        <div className={styles.title}>
          <span className={styles.titleText}>
            {title}
          </span>
        </div>
      </div>

      <Divider className={styles.divider} />

      <Cell className={styles.cell} showNavigator>
        <DotContainer>
          {refundRuleVO && <DotItem>
            {refundRuleVO.title}
          </DotItem>}
          <DotItem>
            极速退款
          </DotItem>
        </DotContainer>
      </Cell>
      
      {expressInfo && (
        <>
          <Divider className={styles.divider} />

          <Cell className={styles.cell}>
            {expressInfo.deliveryDesc}从{expressTemplate.sendProvinceName}{expressTemplate.sendCityName}发货
          </Cell>
        </>
      )}
    </div>
  )
}