import { createModel } from '@rematch/core'
import { delay } from './utils'
import type { RootModel } from './index'
import { getProductDetail } from '../../network/api/product'

export type GoodsDetailState = {
  detail: any;
}

export const goodsDetail = createModel<RootModel>()({
	state: {
    detail: null,
  },
	reducers: {
    setGoodsDetail: (state: GoodsDetailState, payload) => ({
      ...state,
      detail: payload,
    })
		// increment: (state: GoodsDetailState, payload: number) => state + payload,
	},
	effects: (dispatch) => {
		const { goodsDetail } = dispatch
		return {
			async getProductDetail(): Promise<void> {
        const result = await getProductDetail({});
        console.log('result:', result);
        goodsDetail.setGoodsDetail(result);
			},
		}
	},
})