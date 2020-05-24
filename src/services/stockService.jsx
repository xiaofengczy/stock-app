import { post, put, get, del, request } from '@utils/request.js';

//保存今日操盘
export async function addStock(params) {
  return await post(`/addStock`, params);
}

//获取今日操盘列表
export async function listStock(params) {
  return await post(`/listStock`, params);
}

//获取今日操盘
export async function getStock(params) {
  return await get(`/getStock/` + params['id'], {});
}

//删除今日操盘
export async function deleteStock(params) {
  return await del(`/deleteStock/` + params, {});
}

//编辑今日操盘
export async function editStock(params) {
  return await post(`/editStock`, params);
}
