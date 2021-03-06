import { post, put, get, del, request } from '@utils/request.js';

//获取图形验证码
export async function doTest(params) {
  return get(`/doTest`, params);
}

//保存今日操盘
export async function addTrader(params) {
  return await post(`/addTrader`, params);
}

//获取今日操盘列表
export async function listTrader(params) {
  return await post(`/listTrader`, params);
}

//获取今日操盘
export async function getTrader(params) {
  return await get(`/getTrader/` + params['id'], {});
}

//删除今日操盘
export async function deleteTrader(params) {
  return await del(`/delTrader/` + params, {});
}

//编辑今日操盘
export async function editTrader(params) {
  return await post(`/editTrader`, params);
}
