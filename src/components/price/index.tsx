import React, { useMemo } from 'react';
import './index.scss';

type Props = {
  price: number;
}

export default function Price({ price }: Props) {
  const priceStr = useMemo(() => {
    return price / 100;
  }, [price]);
  return (
    <div className='price-wrap'>
      <span className='price-symbol'>¥</span>
      <span className='price-literal'>{priceStr}</span>
    </div>
  )
}