import { post, put, get, del, request } from '@utils/request.js';

//获取图形验证码
export async function doTest(params) {
  console.log(params);
  return await get(`/doTest`, params);
}

//获取图形验证码
export async function addTrader(params) {
  console.log(params);
  return await post(`/addTrader`, params);
}
