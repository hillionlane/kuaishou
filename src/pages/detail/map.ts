import { Dispatch, RootState } from "../../js/store"

export const mapState = (state: RootState) => ({
	goodsDetail: state.goodsDetail.detail,
})

export const mapDispatch = (dispatch: Dispatch) => ({
	getGoodsDetail: () => dispatch.goodsDetail.getProductDetail(),
})