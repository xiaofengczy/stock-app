import { post, put, get, del, request } from '@utils/request.js';

//获取图形验证码
export async function doTest(params) {
  console.log(params);
  return await get(`/doTest`, params);
}

//保存今日操盘
export async function addTrader(params) {
  console.log(params);
  return await post(`/addTrader`, params);
}


//获取今日操盘列表
export async function listTrader(params) {
  return await post(`/listTrader`, params);
}
