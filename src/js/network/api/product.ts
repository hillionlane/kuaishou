import httpResquest from "../request";

export function getProductDetail(params: any) {
  return httpResquest.get('/app/grocery/product/self/detail', {
    params,
  });
}
