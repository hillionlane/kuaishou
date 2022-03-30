import { Models } from '@rematch/core'
import { dolphins } from './test'
import { goodsDetail} from './goods-detail';

export interface RootModel extends Models<RootModel> {
	dolphins: typeof dolphins;
  goodsDetail: typeof goodsDetail;
}

export const models: RootModel = { dolphins, goodsDetail }