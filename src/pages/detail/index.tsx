import React, { useEffect } from 'react'
import GoodsSwiper from '../../components/goods-swiper';
import GoodsBriefInfo from '../../components/goods-brief-info';
import styles from './index.module.scss';
import ShopInfo from '../../components/shop-info';
import GoodsDetail from '../../components/goods-detail';
import Footer from './components/footer';
import { getProductDetail } from '../../js/network/api/product';
import { connect } from 'react-redux';
import { mapDispatch, mapState } from './map';

type Props = {
  getGoodsDetail: () => Promise<any>;
  goodsDetail: any;
}

function Detail({ getGoodsDetail, goodsDetail  }: Props) {
  useEffect(() => {
    getGoodsDetail();
  }, [getGoodsDetail]);
  if (!goodsDetail) {
    return null;
  }
  const { avatar, productDetail, soldNewAmountV2, soldNewAmountDescV2, compScoreView } = goodsDetail;
  const { promotedPrice, promotedPriceTitle, price, serviceRule, expressTemplate } = productDetail;
  const shopInfo = {
    avatar: avatar,
    name: `${productDetail.nickName}的小店`,
    url: 'https://www.baidu.com',
    totalSell: soldNewAmountV2,
    totalSellDesc: soldNewAmountDescV2,
    scoreView: compScoreView,
  }
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <GoodsSwiper imgs={productDetail.imageUrls || []} />
        <GoodsBriefInfo expressTemplate={expressTemplate} serviceRule={serviceRule} price={price} promotedPrice={promotedPrice} promotedTitle={promotedPriceTitle} expressInfo={productDetail.expressInfo} title={productDetail.title} />
        <ShopInfo className={styles.shopInfo} {...shopInfo} />
        <GoodsDetail desc={productDetail.details} imgs={productDetail.detailImageUrls} />
      </div>
      <Footer />
    </div>
  )
}

export default connect(mapState, mapDispatch)(Detail);
